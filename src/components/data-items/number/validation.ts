import { getFloatPosition } from "../../objects/number";
import { getDataItemLabel } from "../label";
import { dynamicRequired } from "../utilities";

export const $numValidations = ({ dataItem, env }: DataItem.ValidationGeneratorProps<DataItem.$num>, skipSourceCheck?: boolean): Array<DataItem.Validation<DataItem.$num>> => {
  const validations: Array<DataItem.Validation<DataItem.$num>> = [];
  const s = getDataItemLabel({ dataItem, env });
  const msgs = dataItem.message?.validation;
  const msgParams: Omit<DataItem.MessageBaseParams<any>, "value"> = {
    lang: env.lang,
    subject: s,
  };

  if (dataItem.required) {
    const hasSource = dataItem.source != null;
    if (dataItem.requiredIsNotZero) {
      validations.push(dynamicRequired(dataItem.required, (p) => {
        if (p.value == null || p.value === 0) {
          return {
            type: "e",
            code: "required",
            fullName: p.fullName,
            msg: msgs?.required ? msgs.required({
              ...msgParams,
              value: p.value,
              mode: hasSource ? "select" : "input",
            }) : env.lang("validation.required", {
              s,
              mode: hasSource ? "select" : "input",
            }),
          };
        }
        return undefined;
      }));
    } else {
      validations.push(dynamicRequired(dataItem.required, ({ value, fullName }) => {
        if (value != null) return undefined;
        return {
          type: "e",
          code: "required",
          fullName: fullName,
          msg: msgs?.required ? msgs.required({
            ...msgParams,
            value,
            mode: hasSource ? "select" : "input",
          }) : env.lang("validation.required", {
            s,
            mode: hasSource ? "select" : "input",
          }),
        };
      }));
    }
  }

  if (dataItem.min != null && dataItem.max != null) {
    validations.push(({ dataItem: { min, max }, value, fullName }) => {
      if (value == null) return undefined;
      if (min! <= value && value <= max!) return undefined;
      return {
        type: "e",
        code: "range",
        fullName,
        msg: msgs?.range ?
          msgs.range({
            ...msgParams,
            value,
            min: min!,
            max: max!,
          }) :
          env.lang("validation.range", {
            s,
            min,
            max,
          }),
      };
    });
  } else {
    if (dataItem.min != null) {
      validations.push(({ dataItem: { min }, value, fullName }) => {
        if (value == null) return undefined;
        if (min! <= value) return undefined;
        return {
          type: "e",
          code: "min",
          fullName,
          msg: msgs?.min ?
            msgs.min({
              ...msgParams,
              value,
              min: min!,
            }) :
            env.lang("validation.min", {
              s,
              min,
            }),
        };
      });
    }
    if (dataItem.max != null) {
      validations.push(({ dataItem: { max }, value, fullName }) => {
        if (value == null) return undefined;
        if (value <= max!) return undefined;
        return {
          type: "e",
          code: "max",
          fullName,
          msg: msgs?.max ?
            msgs.max({
              ...msgParams,
              value,
              max: max!,
            }) :
            env.lang("validation.max", {
              s,
              max,
            }),
        };
      });
    }
  }

  if (dataItem.float != null) {
    validations.push(({ dataItem: { float }, value, fullName }) => {
      if (value == null) return undefined;
      const cur = getFloatPosition(value);
      if (cur <= float!) return undefined;
      return {
        type: "e",
        code: "float",
        fullName,
        msg: msgs?.float ?
          msgs.float({
            ...msgParams,
            value,
            float: float!,
            currentFloat: cur,
          }) :
          env.lang("validation.float", {
            s,
            float,
            cur,
          }),
      };
    });
  }

  if (!skipSourceCheck && dataItem.source) {
    validations.push(({ dataItem: { source }, value, fullName }) => {
      if (value == null) return undefined;
      if (source!.find(s => s.value === value)) return undefined;
      return {
        type: "e",
        code: "source",
        fullName,
        msg: msgs?.source ?
          msgs.source({
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
