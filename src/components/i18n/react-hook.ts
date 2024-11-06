"use client";

import { getLangs } from "./client";
import { langFactoryCore } from "./core";

export const clientLangFactory = () => langFactoryCore(getLangs());

export const useLang = (langs?: Array<Lang>) => {
  return langFactoryCore(getLangs());
};

