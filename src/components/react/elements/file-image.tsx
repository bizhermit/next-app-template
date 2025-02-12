"use client";

/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { type ImgHTMLAttributes, useEffect, useRef } from "react";

export type FileImageOptions = {
  file?: File | string | null | undefined;
};

export type FileImageProps = OverwriteProps<ImgHTMLAttributes<HTMLImageElement>, FileImageOptions>;

export const FileImage = ({
  file,
  ...props
}: FileImageProps) => {
  const ref = useRef<HTMLImageElement>(null!);

  useEffect(() => {
    if (ref.current == null) return;
    if (file == null) {
      ref.current.src = "";
      return;
    }
    if (typeof file === "string") {
      ref.current.src = file;
      return;
    }
    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target == null || ref.current == null) return;
        ref.current.src = e.target.result as any;
      };
      reader.readAsDataURL(file);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.warn(e);
    }
  }, [file]);

  return (
    <img
      {...props}
      ref={ref}
    />
  );
};
