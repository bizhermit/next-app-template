import { equalDate, formatDate, getFirstDateAtMonth, getLastDateAtMonth, isAfterDate, isBeforeDate, parseDate, withoutTime } from "../../objects/date";
import { dynamicRequired } from "../dynamic-required";
import { getDataItemLabel } from "../label";

type Options = {
  skipRequired?: boolean;
};

export const $dateValidations = ({ dataItem, env }: DataItem.ValidationGeneratorProps<DataItem.$date | DataItem.$month>, opts?: Options): Array<DataItem.Validation<DataItem.$date | DataItem.$month, Date>> => {
  const validations: Array<DataItem.Validation<DataItem.$date | DataItem.$month, Date>> = [];
  const s = getDataItemLabel({ dataItem, env });
  const msgs = dataItem.message?.validation;
  const msgParams: Omit<DataItem.MessageBaseParams<any>, "value"> = {
    lang: env.lang,
    subject: s,
  };
  const dateFormatPattern = dataItem.formatPattern || (dataItem.type === "month" ? "yyyy/MM" : "yyyy/MM/dd");

  if (dataItem.required && !opts?.skipRequired) {
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
          env.lang("validation.required", { s }),
      };
    }));
  }

  let min = dataItem.min ? parseDate(typeof dataItem.min === "function" ? dataItem.min() : dataItem.min) : null;
  let max = dataItem.max ? parseDate(typeof dataItem.max === "function" ? dataItem.max() : dataItem.max) : null;
  if (min) min = withoutTime(min);
  if (max) max = withoutTime(max);
  if (dataItem.type === "month") {
    if (min) min = getFirstDateAtMonth(min);
    if (max) max = getLastDateAtMonth(max);
  }
  const minStr = min ? formatDate(min, dateFormatPattern) : "";
  const maxStr = max ? formatDate(max, dateFormatPattern) : "";
  if (min != null && max != null) {
    validations.push(({ value, fullName }) => {
      if (value == null) return undefined;
      const t = value.getTime();
      if (min.getTime() <= t && t <= max.getTime()) return undefined;
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
          env.lang("validation.rangeDate", {
            s,
            minDate: minStr,
            maxDate: maxStr,
          }),
      };
    });
  } else {
    if (min != null) {
      validations.push(({ value, fullName }) => {
        if (value == null) return undefined;
        if (min.getTime() >= value.getTime()) return undefined;
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
            env.lang("validation.minDate", { s, minDate: minStr }),
        };
      });
    }
    if (max != null) {
      validations.push(({ value, fullName }) => {
        if (value == null) return undefined;
        if (value.getTime() <= max.getTime()) return undefined;
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
            env.lang("validation.maxDate", { s, maxDate: maxStr }),
        };
      });
    }
  }

  if (dataItem.pair) {
    validations.push(({ value, siblings, data, fullName }) => {
      if (value == null) return undefined;
      const pairName = dataItem.pair!.name;
      const pairDataItem = siblings?.find(item => item.name === pairName) as DataItem.ArgObject<DataItem.$date | DataItem.$month> | null | undefined;
      if (pairDataItem != null && !(pairDataItem.type === "date" || pairDataItem.type === "month")) return undefined;
      const pairDate = parseDate(data?.[pairName]);
      if (pairDate == null) return undefined;
      if (!dataItem.pair?.same) {
        if (equalDate(pairDate, value)) return undefined;
      }
      if (dataItem.pair?.position === "before") {
        if (isBeforeDate(value, pairDate)) return undefined;
        return {
          type: "e",
          code: "pair-before",
          fullName,
          msg: pairDataItem?.pair ?
            "" : (msgs?.pairBefore ?
              msgs.pairBefore({
                ...msgParams,
                value,
                pairDate,
              }) :
              env.lang("validation.contextDate", { s })
            ),
        };
      }
      if (isAfterDate(value, pairDate)) return undefined;
      return {
        type: "e",
        code: "pair-after",
        fullName,
        msg: msgs?.pairAfter ?
          msgs.pairAfter({
            ...msgParams,
            value,
            pairDate,
          }) :
          env.lang("validation.contextDate", { s }),
      };
    });
  }

  if (dataItem.validations) {
    validations.push(...dataItem.validations as typeof validations);
  }

  return validations;
};
