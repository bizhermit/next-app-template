import { getObjectType } from "../../objects";
import { dynamicRequired } from "../dynamic-required";
import { getDataItemLabel } from "../label";

export const $structValidations = ({ dataItem, env }: DataItem.ValidationGeneratorProps<DataItem.$struct<Array<DataItem.$object>>>): Array<DataItem.Validation<DataItem.$struct<Array<DataItem.$object>>>> => {
  const validations: Array<DataItem.Validation<DataItem.$struct<Array<DataItem.$object>>>> = [];
  const s = getDataItemLabel({ dataItem, env });
  const msgs = dataItem.message?.validation;
  const parseMsgs = dataItem.message?.parse;
  const msgParams: Omit<DataItem.MessageBaseParams<any>, "value"> = {
    lang: env.lang,
    subject: s,
  };

  validations.push(({ value, fullName }) => {
    if (value == null || getObjectType(value) === "Object") return undefined;
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
          type: env.lang("common.typeOfStruct"),
          mode: "set",
        }),
    };
  });

  if (dataItem.required) {
    validations.push(dynamicRequired(dataItem.required, (p) => {
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
    }));
  }

  if (dataItem.validations) {
    validations.push(...dataItem.validations as typeof validations);
  }

  return validations;
};
