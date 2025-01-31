"use client";

import { SelectBox } from "@/react/elements/form/items/select-box";
import { LayoutContext } from "@/react/hooks/layout";
import { use } from "react";

const source = [
  { value: "auto", label: "Auto" },
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
] as const;

export const LayoutThemeSwitch = () => {
  const layout = use(LayoutContext);

  return (
    <div style={{ padding: 5 }}>
      <SelectBox
        source={source}
        onEdit={(v) => {
          if (v?.value) {
            layout.setTheme(v.value);
            return;
          }
          layout.setTheme("auto");
          window.location.reload();
        }}
        defaultValue={layout.theme}
      />
    </div>
  );
};
