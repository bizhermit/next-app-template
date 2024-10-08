import { langLoadLogAtClient } from "../utilities";

const kind = "common";

langLoadLogAtClient("en", "common");

const Langs = {
  halloWorld: () => "Hallo, World.",
  typeOfString: "string type",
  typeOfNumber: "number type",
  typeOfBool: "bool type",
  typeOfArray: "array type",
  typeOfStruct: "struct type",
  typeOfDate: "date type",
  typeOfDateTime: "dateTime type",
  typeOfTime: "time type",
  typeOfFile: "file type",
  ok: "OK",
  close: "Close",
  cancel: "Cancel",
  save: "Save",
} as const satisfies Partial<I18N_Langs[typeof kind]>;

export default Langs;
