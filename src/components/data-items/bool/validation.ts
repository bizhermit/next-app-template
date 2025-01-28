import { equals } from "../../objects";
import { getDataItemLabel } from "../label";

export const $boolValidations = ({ dataItem, env }: DataItem.ValidationGeneratorProps<DataItem.$boolAny>) => {
  const validations: Array<DataItem.Validation<DataItem.$boolAny>> = [];
  const s = getDataItemLabel({ dataItem, env });
  const msgs = dataItem.message?.validation;
  const msgParams: Omit<DataItem.MessageBaseParams<any>, "value"> = {
    lang: env.lang,
    subject: s,
  };

  validations.push((p) => {
    if (equals(p.value, p.dataItem.trueValue)) return undefined;
    const $required = typeof p.dataItem.required === "function" ? p.dataItem.required(p) : p.dataItem.required;
    if (equals(p.value, p.dataItem.falseValue)) {
      if ($required && p.dataItem.requiredIsTrue) {
        return {
          type: "e",
          code: "required",
          fullName: p.fullName,
          msg: msgs?.required ?
            msgs.required({
              ...msgParams,
              value: p.value,
              mode: p.dataItem.source ? "select" : "input",
            }) :
            env.lang("validation.required", { s }),
        };
      }
      return undefined;
    }
    if (p.value == null) {
      if ($required) {
        return {
          type: "e",
          code: "required",
          fullName: p.fullName,
          msg: msgs?.required ?
            msgs.required({
              ...msgParams,
              value: p.value,
              mode: p.dataItem.source ? "select" : "input",
            }) :
            env.lang("validation.required", { s }),
        };
      }
      return undefined;
    }
    return {
      type: "e",
      code: "required",
      fullName: p.fullName,
      msg:
        msgs?.contain ?
          msgs.contain({
            ...msgParams,
            value: p.value,
            trueValue: p.dataItem.trueValue,
            falseValue: p.dataItem.falseValue,
          }) :
          env.lang("validation.contain", { s }),
    };
  });

  if (dataItem.validations) {
    validations.push(...dataItem.validations as typeof validations);
  }

  return validations;
};
