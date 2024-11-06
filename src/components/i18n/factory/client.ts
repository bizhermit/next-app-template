"use client";

import { getLangs } from "../client";
import { langFactoryCore } from "./core";

export const clientLangFactory = langFactoryCore(getLangs());

export const useLangFactory = (langs?: Array<Lang>) => {
  return clientLangFactory;
};

