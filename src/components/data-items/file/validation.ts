import { getAccept, getSizeText } from "../../objects/file";
import { dynamicRequired } from "../dynamic-required";
import { getDataItemLabel } from "../label";

export const $fileValidations = ({ dataItem, env }: DataItem.ValidationGeneratorProps<DataItem.$file>): Array<DataItem.Validation<DataItem.$file>> => {
  const validations: Array<DataItem.Validation<DataItem.$file>> = [];
  const s = getDataItemLabel({ dataItem, env }, "ファイル");
  const msgs = dataItem.message?.validation;
  const parseMsgs = dataItem.message?.parse;
  const msgParams: Omit<DataItem.MessageBaseParams<any>, "value"> = {
    lang: env.lang,
    subject: s,
  };

  validations.push(({ value, fullName }) => {
    if (value == null || value instanceof File) return undefined;
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
          type: env.lang("common.typeOfFile"),
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

  const { accept, items } = getAccept(dataItem.accept);
  if (accept) {
    const validAccept = (file: File) => {
      return items.some(({ accept, type }) => {
        switch (type) {
          case "ext":
            return new RegExp(`${accept}$`, "i").test(file.name);
          case "type":
            return type.toLowerCase() === file.type.toLowerCase();
          default:
            return new RegExp(accept, "i").test(file.type);
        }
      });
    };

    validations.push(({ value, fullName }) => {
      if (value == null) return undefined;
      if (validAccept(value)) return undefined;
      return {
        type: "e",
        code: "accept",
        fullName,
        msg: msgs?.accept ?
          msgs.accept({
            ...msgParams,
            value,
            accept,
          }) :
          env.lang("validation.fileAccept", { s }),
      };
    });
  }

  if (dataItem.fileSize != null) {
    const sizeText = getSizeText(dataItem.fileSize);
    validations.push(({ dataItem: { fileSize }, value, fullName }) => {
      if (value == null) return undefined;
      if (value.size >= dataItem.fileSize!) return undefined;
      return {
        type: "e",
        code: "size",
        fullName,
        msg: msgs?.size ?
          msgs.size({
            ...msgParams,
            value,
            size: fileSize!,
            sizeText,
          }) :
          env.lang("validation.fileSize", { s, size: sizeText }),
      };
    });
  }

  return validations;
};
