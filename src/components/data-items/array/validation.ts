import { equals, getObjectType } from "../../objects";
import { getDataItemLabel } from "../label";

export const $arrayValidations = ({ dataItem, env }: DataItem.ValidationGeneratorProps<DataItem.$array<any>>, skipSourceCheck?: boolean): Array<DataItem.Validation<DataItem.$array<any>>> => {
  const validations: Array<DataItem.Validation<DataItem.$array<any>>> = [];
  const s = getDataItemLabel({ dataItem, env });
  const msgs = dataItem.message?.validation;
  const parseMsgs = dataItem.message?.parse;
  const msgParams: Omit<DataItem.MessageBaseParams<any>, "value"> = {
    lang: env.lang,
    subject: s,
  };

  validations.push(({ value, fullName }) => {
    if (value == null || getObjectType(value) === "Array") return undefined;
    return {
      type: "e",
      code: "type",
      fullName,
      msg: parseMsgs?.typeof ?
        parseMsgs.typeof({
          ...msgParams,
          value,
        }) :
        env.lang("validation.typeOf", {
          s,
          type: env.lang("common.typeOfArray"),
          mode: "set",
        }),
    };
  });

  if (dataItem.required) {
    validations.push((p) => {
      if (typeof p.dataItem.required === "function" && !p.dataItem.required(p)) return undefined;
      if (p.value != null) return undefined;
      return {
        type: "e",
        code: "required",
        fullName: p.fullName,
        msg: msgs?.required ?
          msgs.required({
            ...msgParams,
            value: p.value,
          }) :
          env.lang("validation.required", { s, mode: "set" }),
      };
    });
  }

  if (dataItem.length != null) {
    validations.push(({ dataItem: { length }, value, fullName }) => {
      if (value == null) return undefined;
      if (value.length === length!) return undefined;
      return {
        type: "e",
        code: "length",
        fullName,
        msg: msgs?.length ?
          msgs.length({
            ...msgParams,
            value,
            length: length!,
            currentLength: value.length,
          }) :
          env.lang("validation.number", {
            s,
            num: dataItem.length,
            cur: value.length,
          }),
      };
    });
  } else {
    if (dataItem.minLength != null && dataItem.maxLength != null) {
      validations.push(({ dataItem: { minLength, maxLength }, value, fullName }) => {
        if (value == null) return undefined;
        const cur = value.length;
        if (minLength! <= cur && cur <= maxLength!) return undefined;
        return {
          type: "e",
          code: "range",
          fullName,
          msg: msgs?.range ?
            msgs.range({
              ...msgParams,
              value,
              minLength: minLength!,
              maxLength: maxLength!,
              currentLength: cur,
            }) :
            env.lang("validation.rangeNumber", {
              s,
              minNum: minLength,
              maxNum: maxLength,
              cur,
            }),
        };
      });
    } else {
      if (dataItem.minLength != null) {
        validations.push(({ dataItem: { minLength }, value, fullName }) => {
          if (value == null) return undefined;
          const cur = value.length;
          if (minLength! <= cur) return undefined;
          return {
            type: "e",
            code: "minLength",
            fullName,
            msg: msgs?.minLength ?
              msgs.minLength({
                ...msgParams,
                value,
                minLength: minLength!,
                currentLength: cur,
              }) :
              env.lang("validation.minNumber", {
                s,
                minNum: dataItem.minLength,
                cur,
              }),
          };
        });
      }
      if (dataItem.maxLength != null) {
        validations.push(({ dataItem: { maxLength }, value, fullName }) => {
          if (value == null) return undefined;
          const cur = value.length;
          if (cur <= maxLength!) return undefined;
          return {
            type: "e",
            code: "maxLength",
            fullName,
            msg: msgs?.maxLength ?
              msgs.maxLength({
                ...msgParams,
                value,
                maxLength: maxLength!,
                currentLength: cur,
              }) :
              env.lang("validation.maxNumber", {
                s,
                maxNum: dataItem.maxLength,
                cur,
              }),
          };
        });
      }
    }
  }

  if (!skipSourceCheck && dataItem.source) {
    validations.push(({ dataItem: { source }, value, fullName }) => {
      if (value == null) return undefined;
      const notFoundVals = (value as Array<any>).filter(v => !source!.some(s => equals(s.value, v)));
      if (notFoundVals == null || notFoundVals.length === 0) return undefined;
      return {
        type: "e",
        code: "source",
        fullName,
        msg: msgs?.contain ?
          msgs.contain({
            ...msgParams,
            value,
            source: source!,
          }) :
          env.lang("validation.contain", { s }),
      };
    });
  }

  if (dataItem.validations) {
    validations.push(...dataItem.validations);
  }

  return validations;
};
