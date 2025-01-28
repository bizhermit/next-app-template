import { isAlphabet, isEmpty, isFullWidth, isFWAlphabet, isFWKatakana, isFWNumeric, isHalfWidth, isHiragana, isHWAlphabet, isHWAlphanumeric, isHWAlphanumericAndSymbols, isHWKatakana, isHWNumeric, isInteger, isKatakana, isMailAddress, isNumeric, isPhoneNumber, isUrl, strLength } from "../../objects/string";
import { getDataItemLabel } from "../label";

export const $strValidations = ({ dataItem, env }: DataItem.ValidationGeneratorProps<DataItem.$str>, skipSourceCheck?: boolean): Array<DataItem.Validation<DataItem.$str>> => {
  const validations: Array<DataItem.Validation<DataItem.$str>> = [];
  const s = getDataItemLabel({ dataItem, env });
  const msgs = dataItem.message?.validation;
  const msgParams: DataItem.MessageBaseParams = {
    lang: env.lang,
    subject: s,
  };

  if (dataItem.required) {
    validations.push((p) => {
      if (typeof p.dataItem.required === "function" && !p.dataItem.required(p)) return undefined;
      if (!isEmpty(p.value)) return undefined;
      return {
        type: "e",
        code: "required",
        fullName: p.fullName,
        msg: msgs?.required ? msgs.required({
          ...msgParams,
          mode: p.dataItem.source ? "select" : "input",
        }) : env.lang("validation.required", {
          s,
          mode: p.dataItem.source ? "select" : "input",
        }),
      };
    });
  }

  if (dataItem.length != null) {
    validations.push(({ dataItem: { length }, value, fullName }) => {
      if (isEmpty(value)) return undefined;
      const cur = strLength(value);
      if (cur === length) return undefined;
      return {
        type: "e",
        code: "length",
        fullName,
        msg: msgs?.length ? msgs.length({
          ...msgParams,
          length: length!,
          currentLength: cur,
        }) : env.lang("validation.length", {
          s,
          len: length,
          cur,
        }),
      };
    });
  } else {
    if (dataItem.minLength != null && dataItem.maxLength != null) {
      validations.push(({ dataItem: { minLength, maxLength }, value, fullName }) => {
        if (isEmpty(value)) return undefined;
        const cur = strLength(value);
        if (minLength! <= cur && cur <= maxLength!) return undefined;
        return {
          type: "e",
          code: "range",
          fullName,
          msg: msgs?.range ? msgs.range({
            ...msgParams,
            minLength: minLength!,
            maxLength: maxLength!,
            currentLength: cur,
          }) : env.lang("validation.rangeLength", {
            s,
            minLen: minLength,
            maxLen: maxLength,
            cur,
          }),
        };
      });
    } else {
      if (dataItem.minLength != null) {
        validations.push(({ dataItem: { minLength }, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          const cur = strLength(value);
          if (minLength! <= cur) return undefined;
          return {
            type: "e",
            code: "minLength",
            fullName,
            msg: msgs?.minLength ? msgs.minLength({
              ...msgParams,
              minLength: minLength!,
              currentLength: cur,
            }) : env.lang("validation.minLength", {
              s,
              minLen: minLength,
              cur,
            }),
          };
        });
      }
      if (dataItem.maxLength != null) {
        validations.push(({ dataItem: { maxLength }, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          const cur = strLength(value);
          if (cur <= maxLength!) return undefined;
          return {
            type: "e",
            code: "maxLength",
            fullName,
            msg: msgs?.maxLength ? msgs.maxLength({
              ...msgParams,
              maxLength: maxLength!,
              currentLength: cur,
            }) : env.lang("validation.maxLength", {
              s,
              maxLen: maxLength,
              cur,
            }),
          };
        });
      }
    }
  }

  if (dataItem.charType) {
    switch (dataItem.charType) {
      case "int":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isInteger(value)) return undefined;
          return {
            type: "e",
            code: "int",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "h-num":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isHWNumeric(value)) return undefined;
          return {
            type: "e",
            code: "h-num",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "f-num":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isFWNumeric(value)) return undefined;
          return {
            type: "e",
            code: "f-num",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "num":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isNumeric(value)) return undefined;
          return {
            type: "e",
            code: "num",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "h-alpha":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isHWAlphabet(value)) return undefined;
          return {
            type: "e",
            code: "h-alpha",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "f-alpha":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isFWAlphabet(value)) return undefined;
          return {
            type: "e",
            code: "f-alpha",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "alpha":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isAlphabet(value)) return undefined;
          return {
            type: "e",
            code: "alpha",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "h-alpha-num":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isHWAlphanumeric(value)) return undefined;
          return {
            type: "e",
            code: "h-alpha-num",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "h-alpha-num-syn":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isHWAlphanumericAndSymbols(value)) return undefined;
          return {
            type: "e",
            code: "h-alpha-num-syn",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "h-katakana":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isHWKatakana(value)) return undefined;
          return {
            type: "e",
            code: "h-katakana",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "f-katakana":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isFWKatakana(value)) return undefined;
          return {
            type: "e",
            code: "f-katakana",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "katakana":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isKatakana(value)) return undefined;
          return {
            type: "e",
            code: "katakana",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "hiragana":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isHiragana(value)) return undefined;
          return {
            type: "e",
            code: "hiragana",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "half":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isHalfWidth(value)) return undefined;
          return {
            type: "e",
            code: "half",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "full":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isFullWidth(value)) return undefined;
          return {
            type: "e",
            code: "full",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "email":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isMailAddress(value)) return undefined;
          return {
            type: "e",
            code: "email",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "tel":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isPhoneNumber(value)) return undefined;
          return {
            type: "e",
            code: "tel",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      case "url":
        validations.push(({ dataItem, value, fullName }) => {
          if (isEmpty(value)) return undefined;
          if (isUrl(value)) return undefined;
          return {
            type: "e",
            code: "url",
            fullName,
            msg: msgs?.charType ? msgs.charType({
              ...msgParams,
              charType: dataItem.charType!,
            }) : env.lang("validation.int", { s }),
          };
        });
        break;
      default:
        break;
    }
  }

  if (!skipSourceCheck && dataItem.source) {
    validations.push(({ dataItem: { source }, value, fullName }) => {
      if (isEmpty(value)) return undefined;
      if (source!.find(s => s.value === value)) return undefined;
      return {
        type: "e",
        code: "source",
        fullName,
        msg: msgs?.source ? msgs.source({
          ...msgParams,
          source: source!,
        }) : env.lang("validation.contain", { s }),
      };
    });
  }

  if (dataItem.validations) {
    validations.push(...dataItem.validations);
  }

  return validations;
};
