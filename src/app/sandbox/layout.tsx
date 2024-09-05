import Link from "@/react/elements/link";
import { Navigation } from "@/react/elements/navigation";
import { ReactNode } from "react";
import css from "./layout.module.scss";

const Layout = (props: { children: ReactNode; }) => {
  return (
    <Navigation
      header={
        <h1>
          <Link href="/sandbox" noDecoration>Sandbox</Link>
        </h1>
      }
      content={props.children}
      footer={
        <span className={css.copywrite}>
          &copy;&nbsp;2024&nbsp;bizhermit.com
        </span>
      }
    >
      <div style={{ width: 500, height: 1000, background: "blue" }}>
        navigation menus
      </div>
    </Navigation>
  );
};

export default Layout;
