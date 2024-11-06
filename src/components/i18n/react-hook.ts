"use client";

import { getLangs } from "./client";
import { langFactoryCore } from "./factory/core";

export const clientLangFactory = langFactoryCore(getLangs());

export const useLang = (langs?: Array<Lang>) => {
  return clientLangFactory;
};

