"use client";

import { Fragment, type HTMLAttributes, useMemo, useRef } from "react";
import { $arrayValidations } from "../../../../data-items/array/validation";
import { $boolParse } from "../../../../data-items/bool/parse";
import { $numParse } from "../../../../data-items/number/parse";
import { $strParse } from "../../../../data-items/string/parse";
import { useLang } from "../../../../i18n/react-hook";
import { equals, getObjectType } from "../../../../objects";
import { parseIgnoreName, set } from "../../../../objects/struct";
import "../../../../styles/elements/form/item.scss";
import { type LoadableArray, useLoadableArray } from "../../../hooks/loadable-array";
import { joinClassNames } from "../../utilities";
import { useFormItemCore } from "../item-core";

type SourceData = { [v: string]: any };
type SourceTempData<V = any> = { value: V; label: any; } & { [v: string]: any };

type CheckListOptions<D extends DataItem.$array<DataItem.$str | DataItem.$num | DataItem.$boolAny> | undefined, S extends SourceData = SourceTempData<D extends DataItem.$array<DataItem.$str | DataItem.$num | DataItem.$boolAny> ? Array<DataItem.ValueType<D>> : Array<any>>> =
  Omit<FormItemOptions<D, D extends DataItem.$array<DataItem.$str | DataItem.$num | DataItem.$boolAny> ? Array<DataItem.ValueType<D>> : Array<any>, Array<S>>, "hideClearButton"> & {
    length?: DataItem.$array<any>["length"];
    minLength?: DataItem.$array<any>["minLength"];
    maxLength?: DataItem.$array<any>["maxLength"];
    labelDataName?: string;
    valueDataName?: string;
    stateDataName?: string;
    source?: LoadableArray<S>;
    preventSourceMemorize?: boolean;
    tieInNames?: Array<{ dataName: string; hiddenName?: string }>;
  };

type CheckListProps<D extends DataItem.$array<DataItem.$str | DataItem.$num | DataItem.$boolAny> | undefined, S extends SourceData> =
  OverwriteAttrs<HTMLAttributes<HTMLDivElement>, CheckListOptions<D, S>>;

export const CheckList = <D extends DataItem.$array<DataItem.$str | DataItem.$num | DataItem.$boolAny> | undefined, S extends SourceData>({
  length,
  minLength,
  maxLength,
  labelDataName,
  valueDataName,
  stateDataName,
  source,
  preventSourceMemorize,
  tieInNames,
  ...props
}: CheckListProps<D, S>) => {
  const ref = useRef<HTMLDivElement>(null!);
  const lang = useLang();
  const vdn = valueDataName ?? "value";
  const ldn = labelDataName ?? "label";
  const sdn = stateDataName ?? "state";

  const $source = useMemo(() => {
    if (source) return source;
    if (!props.dataItem) return [];
    if (props.dataItem.source) return props.dataItem.source;
    if (props.dataItem.item?.source) return props.dataItem.item.source;
    if (props.dataItem.item && "trueValue" in props.dataItem.item) {
      const di = props.dataItem.item as never as DataItem.$boolAny;
      return [
        {
          [vdn]: di.trueValue,
          [ldn]: di.trueLabelAsIs
            || (di.trueLabel ? lang(di.trueLabel) : "")
            || String(di.trueValue),
        },
        {
          [vdn]: di.falseValue,
          [ldn]: di.falseLabelAsIs
            || (di.falseLabel ? lang(di.falseLabel) : "")
            || String(di.falseValue),
        },
      ];
    }
    return [];
  }, [preventSourceMemorize ? source : ""]);

  const [origin, loading] = useLoadableArray($source, { preventMemorize: preventSourceMemorize });

  const fi = useFormItemCore<DataItem.$array<DataItem.$str | DataItem.$num | DataItem.$boolAny>, D, Array<any>, Array<{ [P in typeof vdn]: any; } & { [P in typeof ldn]: any }>>(props, {
    dataItemDeps: [vdn, ldn, origin, length, minLength, maxLength],
    getDataItem: ({ dataItem }) => {
      return {
        type: "array",
        item: dataItem?.item ?? {
          type: (() => {
            switch (getObjectType(origin[origin.length - 1]?.[vdn])) {
              case "Number": return "num";
              case "Boolean": return "bool";
              default: return "str";
            }
          })()
        },
        length: length ?? dataItem?.length,
        minLength: minLength ?? dataItem?.minLength,
        maxLength: maxLength ?? dataItem?.maxLength,
      };
    },
    getTieInNames: () => tieInNames,
    parse: ({ dataItem, env, label }) => {
      const parseData = ([v, r]: DataItem.ParseResult<any>, p: DataItem.ParseProps<any>): DataItem.ParseResult<any> => {
        if (loading) {
          return [{ [vdn]: v, [ldn]: v == null ? "" : String(v) }, r];
        }
        if (v == null) return [undefined, r];
        const item = origin.find(item => equals(item[vdn], v));
        if (item == null) {
          return [undefined, {
            type: "e",
            code: "not-found",
            fullName: p.fullName,
            msg: env.lang("validation.choices", { s: label, value: v }),
          }];
        }
        return [item, r];
      };
      const item = dataItem.item as DataItem.$str | DataItem.$num | DataItem.$boolAny;
      const itemParse = (() => {
        switch (item.type) {
          case "str": return (p: DataItem.ParseProps<DataItem.$array<DataItem.$str | DataItem.$num | DataItem.$boolAny>>) => $strParse({ ...p, dataItem: item });
          case "num": return (p: DataItem.ParseProps<DataItem.$array<DataItem.$str | DataItem.$num | DataItem.$boolAny>>) => $numParse({ ...p, dataItem: item });
          case "bool":
          case "b-num":
          case "b-str":
            return (p: DataItem.ParseProps<DataItem.$array<DataItem.$str | DataItem.$num | DataItem.$boolAny>>) => $boolParse({ ...p, dataItem: item });
          default:
            return ({ value }: DataItem.ParseProps<DataItem.$array<DataItem.$str | DataItem.$num | DataItem.$boolAny>>): DataItem.ParseResult<any> => {
              return [value];
            };
        }
      })();
      return (p) => {
        if (p.value == null) return [undefined];
        const results: Array<DataItem.ValidationResult> = [];
        const arr = (Array.isArray(p.value) ? p.value : [p.value]).map(val => {
          const [v, r] = parseData(itemParse({ ...p, value: val }), p);
          if (r) results.push(r);
          return v;
        }).filter(item => item?.[vdn] != null);
        return [arr.length === 0 ? undefined : arr, results[0]];
      };
    },
    revert: (v) => v?.map(val => val[vdn]),
    equals: (v1, v2) => {
      if ((v1 == null || v1.length === 0) && (v2 == null || v2.length === 0)) return true;
      if (v1 == null || v2 == null) return false;
      if (v1.length !== v2.length) return false;
      return v1.some(val1 => v2.some(val2 => equals(val1[vdn], val2[vdn])));
    },
    effect: () => { },
    validation: ({ dataItem, env, iterator }) => {
      const funcs = $arrayValidations({ dataItem, env }, true);
      return (_, p) => iterator(funcs, p);
    },
    setBind: ({ data, name, value, getTieInNames }) => {
      if (value == null) {
        if (name) {
          set(data, name, undefined);
          set(data, parseIgnoreName(name), undefined);
        }
        getTieInNames()?.forEach(({ dataName, hiddenName }) => {
          set(data, hiddenName ?? dataName, undefined);
        });
      }
      if (name) {
        set(data, name, value?.map(v => v[vdn]));
        set(data, parseIgnoreName(name), value);
      }
      getTieInNames()?.forEach(({ dataName, hiddenName }) => {
        set(data, hiddenName ?? dataName, value?.map(v => v[dataName]));
      });
    },
    focus: () => {
      ((ref.current?.querySelector(`label:has(input:checked:not([data-disabled="true"])`) ??
        ref.current?.querySelector(`label:has(input:not([data-disabled="true"])`)) as HTMLLabelElement)?.focus();
    },
  });

  const empty = fi.value == null || fi.value.length === 0;

  return (
    <>
      <div
        {...fi.props}
        className={joinClassNames("ipt-items", props.className)}
        ref={ref}
        data-name={fi.name}
        data-loaded={!loading}
      >
        {loading && <div className="ipt-loading" />}
        {origin.map((item, i) => {
          const v = item[vdn];
          const s = item[sdn];
          const disabled = fi.disabled || s === "disabled";
          const readonly = fi.readOnly || loading || s === "readonly";
          const selected = fi.value?.some(val => equals(v, val[vdn]));
          return (
            <label
              className="ipt-lbl"
              key={v ?? "_null"}
              data-disabled={disabled}
              data-readonly={readonly}
              data-children={true}
            >
              <input
                className="ipt-chk"
                type="checkbox"
                disabled={disabled}
                readOnly={readonly}
                tabIndex={fi.tabIndex}
                autoFocus={i === 0 && fi.autoFocus}
                checked={!empty && selected}
                {...fi.iptAria}
                onChange={e => {
                  if (readonly || disabled || loading) return;
                  const arr = [...fi.valueRef.current ?? []];
                  const i = arr.findIndex(val => equals(v, val[vdn]));
                  if (!e.target.checked) {
                    arr.splice(i, 1);
                    fi.set({ value: arr.length === 0 ? undefined : arr, edit: true });
                    return;
                  }
                  arr.push(item);
                  fi.set({ value: arr, edit: true });
                }}
              />
              {item[ldn]}
            </label>
          );
        })}
        {fi.name && fi.mountValue && fi.value?.map(item => {
          return (
            <Fragment key={item[vdn] ?? "_null"}>
              <input
                name={`${fi.name}[]`}
                type="hidden"
                value={String(item[vdn] ?? "")}
                disabled={fi.disabled}
              />
              {tieInNames?.map(({ dataName, hiddenName }) => {
                const v = item[dataName];
                return (
                  <input
                    key={dataName}
                    type="hidden"
                    name={`${hiddenName ?? dataName}[]`}
                    value={String(v ?? "")}
                  />
                );
              })}
            </Fragment>
          );
        })}
      </div>
      {!loading && fi.messageComponent}
    </>
  );
};
