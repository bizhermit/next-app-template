/* eslint-disable @next/next/no-head-element */
import { LANG_KEY } from "@/i18n/consts";
import { LangProvider } from "@/i18n/react-hook";
import { analyzeHeaderAcceptLang, parseLangs } from "@/i18n/utilities";
import { defaultLayoutTheme, LAYOUT_THEME_KEY, LayoutProvider } from "@/react/hooks/layout";
import { useLoaderResponseData } from "@/react/hooks/remix";
import { pickCookieValue } from "@/utilities/cookie";
import { type LinksFunction, type LoaderFunction } from "@remix-run/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import globalStylesheet from "./components/styles/index.scss?url";

export const links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: globalStylesheet,
  }
];

export const loader: LoaderFunction = ({ request }) => {
  const cookies = request.headers.get("Cookie") || "";
  let langs = parseLangs(pickCookieValue(cookies, LANG_KEY));
  let appendCookie = "";
  if (langs == null || langs.length === 0) {
    const v = analyzeHeaderAcceptLang(request.headers.get("accept-language"));
    langs = parseLangs(v);
    appendCookie += `${LANG_KEY}=${v};Path=/;SameSite=Lax`;
  }
  const theme = pickCookieValue(cookies, LAYOUT_THEME_KEY) || defaultLayoutTheme;
  const appMode = process.env.APP_MODE;

  const ret = {
    langs,
    theme,
    appMode,
  };
  return new Response(JSON.stringify(ret), !appendCookie ? undefined : {
    headers: {
      "Set-Cookie": appendCookie,
    },
  });
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { langs, theme, appMode } = useLoaderResponseData<typeof loader>();

  return (
    <html
      lang={langs?.[0]}
      data-theme={theme}
      data-mode={appMode}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Remix-App Template</title>
        <meta name="description" content="remix-app template" />
        <Meta />
        <Links />
      </head>
      <body>
        <LangProvider langs={langs}>
          <LayoutProvider defaultLayoutTheme={theme}>
            {children}
          </LayoutProvider>
        </LangProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
};

const App = () => <Outlet />;

export default App;