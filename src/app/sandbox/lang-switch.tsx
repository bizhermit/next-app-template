"use client";

import { clearLang, setLang } from "@/i18n/client";
import { LANG_LABELS, LANGS } from "@/i18n/consts";
import { useLang } from "@/i18n/react-hook";
import { SelectBox } from "@/react/elements/form/items/select-box";

const source = [{ value: undefined, label: "(reset)" }, ...LANGS.map(v => ({ value: v, label: LANG_LABELS[v] }))];

export const LnagSwitch = () => {
  const lang = useLang();

  return (
    <div style={{ padding: 5 }}>
      <SelectBox
        source={source}
        onEdit={(v) => {
          if (v?.value) setLang(v.value);
          else clearLang();
        }}
        defaultValue={lang.primary}
      />
    </div>
  );
};
