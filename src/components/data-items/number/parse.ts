import { parseNum } from "../../objects/number";
import { getDataItemLabel } from "../label";

export const $numParse = <V extends number>({ value, dataItem, fullName, env }: DataItem.ParseProps<DataItem.$num<V> | DataItem.$boolNum<V, V>>, skipRefSource?: boolean): DataItem.ParseResult<V> => {
  const s = getDataItemLabel({ dataItem: dataItem as DataItem.$num, env });
  const msgs = (dataItem as DataItem.$num<V>).message?.parse;
  const msgParams: Omit<DataItem.MessageBaseParams<any>, "value"> = {
    lang: env.lang,
    subject: s,
  };

  try {
    if (Array.isArray(value) && value.length > 1) {
      return [undefined, {
        type: "e",
        code: "multiple",
        fullName,
        msg: msgs?.single ?
          msgs.single({
            ...msgParams,
            value,
          }) :
          env.lang("validation.single", { s }),
      }];
    }

    let v: V | DataItem.NullValue, change = false;
    if (value == null || typeof value === "number") {
      v = value;
    } else {
      if (typeof value === "string" && value.trim() === "") {
        v = undefined;
      } else {
        v = parseNum(value) as V | DataItem.NullValue;
        if (v == null || isNaN(v)) throw new Error;
      }
      change = true;
    }

    if (!skipRefSource) {
      const source = (dataItem as DataItem.$num)["source"];
      if (v != null && source && !source.find(s => s.value === v)) {
        return [v, {
          type: "e",
          code: "source",
          fullName,
          msg: `${change ? `${env.lang("validation.parseSucceeded", {
            s,
            type: env.lang("common.typeOfNumber"),
            before: value,
            after: v,
          })} / ` : ""}${msgs?.contain ?
            msgs.contain({
              ...msgParams,
              value: v,
              source: source as DataItem.Source<any>,
            }) :
            env.lang("validation.contain", { s })}`,
        }];
      }
    }
    return change ? [v, {
      type: "i",
      code: "parse",
      fullName,
      msg: env.lang("validation.parseSucceeded", {
        s,
        type: env.lang("common.typeOfNumber"),
        before: value,
        after: v,
      }),
    }] : [v];
  } catch {
    return [undefined, {
      type: "e",
      code: "parse",
      fullName,
      msg: msgs?.typeof ?
        msgs.typeof({
          ...msgParams,
          value,
        }) :
        env.lang("validation.parseFailed", {
          s,
          type: env.lang("common.typeOfNumber"),
          value,
        }),
    }];
  }
};
