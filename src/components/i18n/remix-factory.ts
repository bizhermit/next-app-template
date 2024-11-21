import { pickCookieValue } from "../utilities/cookie";
import { DEFAULT_LANG, LANG_KEY } from "./consts";
import { langFactoryCore } from "./core";
import { parseLangs } from "./utilities";

export const langFactory = (request: Request) => {
  return langFactoryCore(parseLangs(pickCookieValue(request.headers.get("Cookie") || "", LANG_KEY)) ?? [DEFAULT_LANG]);
};
