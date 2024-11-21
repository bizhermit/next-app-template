import { Link as $Link } from "@remix-run/react";
import { type RemixLinkProps } from "@remix-run/react/dist/components";
import { type AnchorHTMLAttributes } from "react";
import { getDynamicPathname, type UrlPath } from "../../../objects/url";

export type RemixLinkOptions = {
  href?: UrlPath;
  params?: { [v: string | number | symbol]: any } | null | undefined;
  query?: { [v: string | number | symbol]: any } | null | undefined;
  disabled?: boolean;
  noDecoration?: boolean;
  button?: boolean;
};

export type LinkProps = Omit<OverwriteAttrs<OverwriteAttrs<AnchorHTMLAttributes<HTMLAnchorElement>, RemixLinkProps>, RemixLinkOptions>, "to">;

export const Link = ({
  href,
  params,
  query,
  disabled,
  prefetch,
  noDecoration,
  button,
  ...props
}: LinkProps) => {
  const pathname = href ? getDynamicPathname(href, { ...query, ...params }, { appendQuery: query != null }) : "";
  return (
    <$Link
      {...props}
      prefetch={prefetch || "none"}
      aria-disabled={disabled}
      data-nodecoration={noDecoration}
      inert={disabled}
      role={button ? "button" : undefined}
      to={disabled ? null! : pathname}
    />
  );
};

export default Link;
