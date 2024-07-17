import { type ChangeEvent, type HTMLAttributes, useRef } from "react";
import { $fileParse } from "../../../../data-items/file/parse";
import { $fileValidation } from "../../../../data-items/file/validation";
import { Button } from "../../button";
import { joinClassNames } from "../../utilities";
import { useFormItemCore } from "../hooks";

type FileButtonOptions<D extends DataItem.$file | undefined> = FormItemOptions<D, D extends DataItem.$file ? DataItem.ValueType<D> : File> & {
  accept?: string;
  fileSize?: number;
  fileName?: string;
  hideFileName?: string;
};

type FileButtonProps<D extends DataItem.$file | undefined> = OverwriteAttrs<HTMLAttributes<HTMLDivElement>, FileButtonOptions<D>>;

export const FileButton = <D extends DataItem.$file | undefined>({
  accept,
  fileSize,
  fileName,
  hideFileName,
  ...props
}: FileButtonProps<D>) => {
  const iref = useRef<HTMLInputElement>(null!);
  const bref = useRef<HTMLButtonElement>(null!);

  const focusInput = () => {
    bref.current?.focus();
  };

  const fi = useFormItemCore<DataItem.$file, D, File, File>(props, {
    dataItemDeps: [accept, fileSize, fileName],
    getDataItem: ({ dataItem }) => {
      return {
        type: "file",
        accept: accept ?? dataItem?.accept,
        fileSize: fileSize ?? dataItem?.fileSize,
        fileName: fileName ?? dataItem?.fileName,
      };
    },
    parse: () => $fileParse,
    effect: ({ edit, value, effect }) => {
      if (iref.current && (!edit || effect)) {
        if (value) {
          const dt = new DataTransfer();
          if (value instanceof File) {
            dt.items.add(value);
            iref.current.value = "";
            iref.current.files = dt.files;
          } else {
            // eslint-disable-next-line no-console
            console.warn(`failed to convert for DataTransfer. no file/blob`);
          }
        } else {
          iref.current.value = "";
          iref.current.files = null;
        }
      }
    },
    validation: ({ dataItem, iterator }) => {
      const funcs = $fileValidation(dataItem);
      return (_, p) => iterator(funcs, p);
    },
    focus: focusInput,
  });

  const empty = fi.value == null;

  const click = () => {
    if (!fi.editable) return;
    iref.current?.click();
  };

  const change = (e: ChangeEvent<HTMLInputElement>) => {
    if (!fi.editable) return;
    const file = e.currentTarget.files?.item(0);
    if (fi.form.state !== "nothing" && fileName) {
      fi.form.setValue(fileName, undefined, true);
    }
    fi.set({ value: file, edit: true });
  };

  const clear = () => {
    if (!fi.editable || empty) return;
    if (fi.form.state !== "nothing" && fileName) {
      fi.form.setValue(fileName, undefined, true);
    }
    fi.clear(true);
    focusInput();
  };

  return (
    <>
      <div
        {...fi.props}
        {...fi.attrs}
        className={joinClassNames("ipt-row", props.className)}
      >
        <Button
          ref={bref}
          onClick={click}
          disabled={!fi.editable}
        >
          {props.children ?? "ファイルを選択"}
        </Button>
        <input
          ref={iref}
          className="ipt-file"
          type="file"
          name={fi.mountValue ? fi.name : undefined}
          accept={fi.dataItem.accept}
          onChange={change}
        />
        {!hideFileName && !empty &&
          <span className="ipt-file-name">
            {empty ? undefined : (fi.value?.name || ((!fileName || fi.form.bind == null) ? "" : fi.form.bind?.[fileName]))}
          </span>
        }
        {!empty && fi.clearButton(clear)}
      </div>
      {fi.messageComponent}
    </>
  );
};