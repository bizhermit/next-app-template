import { equals } from "../../objects";
import { parseNum } from "../../objects/number";

const defaultLabel = "値";

export const $boolParse = <V extends boolean | number | string>(value: any, dataItem: DataItem.$bool<boolean, boolean> | DataItem.$boolNum<number, number> | DataItem.$boolStr<string, string>): DataItem.ParseResult<V> => {
  if (value == null || equals(value, dataItem.trueValue) || equals(value, dataItem.falseValue)) return [value];

  const label = dataItem.label || defaultLabel;
  switch (dataItem.type) {
    case "bool":
      if (typeof value === "string") {
        if (value === String(dataItem.trueValue)) {
          return [dataItem.trueValue as V, { type: "i", code: "parse", msg: `${label}を真偽値型に変換しました。[${value}]->[${dataItem.trueValue}]`}];
        }
        if (value === String(dataItem.falseValue)) {
          return [dataItem.falseValue as V, { type: "i", code: "parse", msg: `${label}を真偽値型に変換しました。[${value}]->[${dataItem.falseValue}]`}];
        }
      }
      break;
    case "num":
      if (typeof value === "string") {
        const num = parseNum(value);
        if (num === dataItem.trueValue) {
          return [dataItem.trueValue as V, { type: "i", code: "parse", msg: `${label}を真偽値型に変換しました。[${value}]->[${dataItem.trueValue}]`}];
        }
        if (num === dataItem.falseValue) {
          return [dataItem.falseValue as V, { type: "i", code: "parse", msg: `${label}を真偽値型に変換しました。[${value}]->[${dataItem.falseValue}]`}];
        }
      }
      break;
    default:
      if (typeof value === "number") {
        const str = String(value);
        if (str === dataItem.trueValue) {
          return [dataItem.trueValue as V, { type: "i", code: "parse", msg: `${label}を真偽値型に変換しました。[${value}]->[${dataItem.trueValue}]`}];
        }
        if (str === dataItem.falseValue) {
          return [dataItem.falseValue as V, { type: "i", code: "parse", msg: `${label}を真偽値型に変換しました。[${value}]->[${dataItem.falseValue}]`}];
        }
      }
      break;
  }

  return [undefined, { type: "e", code: "parse", msg: `${label}は真偽値で入力してください。[${value}]` }];
};