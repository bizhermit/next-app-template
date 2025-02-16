import { CalendarIcon, CloudIcon, ElementIcon, ExLinkIcon, HomeIcon, ListIcon, MailIcon, PowerIcon, SmileIcon } from "@/react/elements/icon";
import Link from "@/react/elements/link";
import { Navigation } from "@/react/elements/navigation";
import { NavigationMenu, NavMenuLink, NavMenuNest } from "@/react/elements/navigation/menu";
import { FetchProvider } from "@/react/hooks/fetch";
import { cookies } from "next/headers";
import { LnagSwitch } from "./lang-switch";
import { LayoutThemeSwitch } from "./layout-theme-switch";
import css from "./layout.module.scss";

const Layout: ServerLayout = async (props) => {
  const langs = (await cookies()).get("lang")?.value;

  return (
    <FetchProvider>
      <Navigation
        header={
          <h1>
            <Link href="/sandbox" noDecoration>Sandbox</Link>
            <span> - {langs}</span>
          </h1>
        }
        content={props.children}
        footer={
          <span className={css.copywrite}>
            &copy;&nbsp;2024&nbsp;bizhermit.com
          </span>
        }
      >
        <NavigationMenu>
          <NavMenuLink
            url="/"
            icon={<PowerIcon />}
            selected="match"
          >
            index
          </NavMenuLink>
          <NavMenuLink
            url="/sandbox"
            icon={<HomeIcon />}
            selected="match"
          >
            Home
          </NavMenuLink>
          <NavMenuLink
            url="/sandbox/element"
            icon={<ElementIcon />}
          >
            React Elements
          </NavMenuLink>
          <NavMenuNest
            text="Routing"
            icon={<ExLinkIcon />}
          >
            <NavMenuLink
              url="/sandbox/page-transition/ssr"
              icon={<ExLinkIcon />}
            >
              Page Transition SSR
            </NavMenuLink>
            <NavMenuLink
              url="/sandbox/page-transition/csr"
              icon={<ExLinkIcon />}
            >
              Page Transition CSR
            </NavMenuLink>
            <NavMenuLink
              url="/sandbox/paralell-routes"
              icon={<ExLinkIcon />}
            >
              Parallel Routes
            </NavMenuLink>
            <NavMenuLink
              url="/sandbox/paralell-routes/hoge"
              icon={<ExLinkIcon />}
            >
              Parallel Routes / hoge
            </NavMenuLink>
            <NavMenuLink
              url="/sandbox/paralell-route-modal"
              icon={<ExLinkIcon />}
            >
              Parallel Route Modal
            </NavMenuLink>
            <NavMenuLink
              url="/sandbox/intercepting-routes"
              icon={<ExLinkIcon />}
            >
              Intercepting Routes
            </NavMenuLink>
          </NavMenuNest>
          <NavMenuLink
            url="/sandbox/fetch"
            icon={<CloudIcon />}
          >
            Fetch API
          </NavMenuLink>
          <NavMenuLink
            url="/sandbox/datetime"
            icon={<CalendarIcon />}
          >
            DateTime
          </NavMenuLink>
          <NavMenuLink
            url="/sandbox/mailaddress"
            icon={<MailIcon />}
          >
            MailAddress
          </NavMenuLink>
          <NavMenuLink
            url="/sandbox/listview"
            icon={<ListIcon />}
          >
            ListView
          </NavMenuLink>
          <NavMenuLink
            url="/sandbox/icon"
            icon={<SmileIcon />}
          >
            Icon
          </NavMenuLink>
        </NavigationMenu>
        <LnagSwitch />
        <LayoutThemeSwitch />
      </Navigation>
    </FetchProvider>
  );
};

export default Layout;
