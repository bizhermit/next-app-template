import { isEmpty } from "../../objects/string";
import { getDataItemLabel } from "../label";

export const $strParse = <V extends string>({ value, dataItem, fullName, env }: DataItem.ParseProps<DataItem.$object>, skipRefSource?: boolean): DataItem.ParseResult<V> => {
  const s = getDataItemLabel({ dataItem, env });
  const msgs = (dataItem as DataItem.$str<V>).message?.parse;
  const msgParams: DataItem.MessageBaseParams = {
    lang: env.lang,
    subject: s,
  };

  if (Array.isArray(value) && value.length > 1) {
    return [undefined, {
      type: "e",
      code: "multiple",
      fullName,
      msg: msgs?.single ?
        msgs.single(msgParams) :
        env.lang("validation.single", { s }),
    }];
  }

  const v = (value == null || typeof value === "string") ? value : String(value);
  if (!skipRefSource) {
    const source = (dataItem as DataItem.$str)["source"];
    if (!isEmpty(v) && source && !source.find(s => s.value === v)) {
      return [v, {
        type: "e",
        code: "source",
        fullName,
        msg: msgs?.contain ?
          msgs?.contain({
            ...msgParams,
            source: source as DataItem.Source<any>,
          }) :
          env.lang("validation.contain", { s }),
      }];
    }
  }
  return [v];
};
