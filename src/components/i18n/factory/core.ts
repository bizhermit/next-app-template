import { DEFAULT_LANG } from "../consts";

export const langFactoryCore = (langs: Array<Lang>) => {
  const cache: Partial<LangCache> = (() => {
    if ((global as any).i18n == null) (global as any).i18n = {};
    return (global as any).i18n;
  })();

  const lang = ((key, arg) => {
    const [s, k] = key.split(".");
    for (let i = 0, il = langs.length; i < il; i++) {
      const l = langs[i];
      if (cache[l] == null) cache[l] = {};
      if (!(s in cache[l]!)) {
        try {
          cache[l]![s] = require(`src/i18n/${l}/${s}`)?.default;
        } catch (e) {
          cache[l]![s] = null;
          continue;
        }
      }
      const func = cache[l]![s]?.[k];
      if (func == null) continue;
      if (typeof func === "function") return func(arg as any);
      return func;
    }
    if (cache[DEFAULT_LANG] == null) cache[DEFAULT_LANG] = {};
    try {
      if (!(s in cache[DEFAULT_LANG]!)) cache[DEFAULT_LANG]![s] = require(`src/i18n/${DEFAULT_LANG}/${s}`)?.default;
    } catch (e) {
      cache[DEFAULT_LANG]![s] = null;
    }
    const func = cache[DEFAULT_LANG]![s]?.[k];
    if (typeof func === "function") return func(arg as any);
    return func;
  }) as LangAccessor;
  lang.primary = langs[0];
  return lang;
};
