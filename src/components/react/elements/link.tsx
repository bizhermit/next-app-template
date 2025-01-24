import $Link, { type LinkProps } from "next/link";
import { type AnchorHTMLAttributes } from "react";
import { replaceDynamicPathname, type UrlPath } from "../../objects/url";

export type NextLinkOptions = {
  href?: Exclude<UrlPath, ApiPath>;
  params?: { [v: string | number | symbol]: any } | null | undefined;
  query?: { [v: string | number | symbol]: any } | null | undefined;
  disabled?: boolean;
  noDecoration?: boolean;
  button?: boolean | {
    round?: boolean;
    outline?: boolean;
    color?: StyleColor;
  };
  outline?: boolean;
};

export type NextLinkProps = OverwriteProps<OverwriteAttrs<Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href">, LinkProps>, NextLinkOptions>;

export const Link = ({
  href,
  params,
  query,
  disabled,
  prefetch,
  noDecoration,
  button,
  ...props
}: NextLinkProps) => {
  const pathname = href ? replaceDynamicPathname(href, params) : "";
  const btn = !button ? undefined : typeof button === "boolean" ? {} : button;
  return (
    <$Link
      {...props}
      prefetch={prefetch ?? false}
      aria-disabled={disabled}
      data-nodecoration={noDecoration}
      inert={disabled}
      role={btn ? "button" : undefined}
      data-round={btn?.round}
      data-outline={btn?.outline}
      data-color={btn?.color}
      href={disabled ? "" : (query ? { pathname, query } : pathname)}
    />
  );
};

export default Link;
