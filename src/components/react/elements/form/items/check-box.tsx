import { useRef, type HTMLAttributes } from "react";
import { $boolParse } from "../../../../data-items/bool/parse";
import { $boolValidations } from "../../../../data-items/bool/validation";
import { equals } from "../../../../objects";
import { joinClassNames } from "../../utilities";
import { useFormItemCore } from "../hooks";

type CheckBoxOptions<True extends boolean | number | string, False extends boolean | number | string, D extends DataItem.$boolAny<True, False>> = FormItemOptions<D> & {
  trueValue?: True;
  falseValue?: False;
  requiredIsTrue?: boolean;
};

type CheckBoxProps<True extends boolean | number | string, False extends boolean | number | string, D extends DataItem.$boolAny<True, False>> =
  OverwriteAttrs<HTMLAttributes<HTMLLabelElement>, CheckBoxOptions<True, False, D>>

export const CheckBox = <True extends boolean | number | string, False extends boolean | number | string, D extends DataItem.$boolAny<True, False>>({
  trueValue,
  falseValue,
  requiredIsTrue,
  ...props
}: CheckBoxProps<True, False, D>) => {
  const iref = useRef<HTMLInputElement>(null!);

  const fi = useFormItemCore<DataItem.$boolAny<True, False>, D>(props, {
    dataItemDeps: [trueValue, falseValue, requiredIsTrue],
    getDataItem: ({ dataItem }) => {
      const tv = trueValue ?? dataItem?.trueValue;
      const fv = falseValue ?? dataItem?.falseValue;
      if (dataItem?.type) {
        return {
          type: dataItem.type,
          trueValue: tv,
          falseValue: fv,
          requiredIsTrue: requiredIsTrue ?? dataItem.requiredIsTrue,
        } as D;
      }
      switch (typeof (tv ?? fv)) {
        case "number":
          return {
            type: "num",
            trueValue: tv ?? 1,
            falseValue: fv ?? 0,
            requiredIsTrue,
          } as D;
        case "string":
          return {
            type: "str",
            trueValue: tv ?? "1",
            falseValue: fv ?? "0",
            requiredIsTrue,
          } as D;
        default:
          return {
            type: "bool",
            trueValue: tv ?? true,
            falseValue: fv ?? false,
            requiredIsTrue,
          } as D;
      }
    },
    parse: (p) => $boolParse(p),
    effect: ({ value, edit, dataItem }) => {
      if (!edit && iref.current) iref.current.checked = equals(dataItem.trueValue, value);
    },
    validations: ({ dataItem }) => $boolValidations(dataItem),
    focus: () => iref.current?.focus(),
  });

  return (
    <>
      <label
        {...fi.props}
        {...fi.airaProps}
        tabIndex={fi.editable ? -1 : undefined}
        className={joinClassNames("ipt-lbl", props.className)}
      >
        <input
          ref={iref}
          className="ipt-chk"
          type="checkbox"
          disabled={fi.disabled}
          readOnly={fi.readOnly || fi.form.pending}
          tabIndex={fi.tabIndex}
          checked={equals(fi.dataItem.trueValue, fi.value)}
          onChange={e => {
            if (fi.disabled || fi.readOnly || fi.form.pending) return;
            fi.set({ value: e.target.checked ? fi.dataItem.trueValue : fi.dataItem.falseValue, edit: true });
          }}
          aria-invalid={fi.airaProps["aria-invalid"]}
        />
        {fi.name && fi.value != null &&
          <input
            name={fi.name}
            type="hidden"
            value={fi.value}
          />
        }
        {props.children}
      </label>
      {fi.messageComponent}
    </>
  );
};