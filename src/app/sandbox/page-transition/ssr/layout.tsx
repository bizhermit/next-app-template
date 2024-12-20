import Link from "@/react/elements/link";
import { InputsAsClient } from "../../inputs-client";
import { InputsAsServer } from "../../inputs-server";
import css from "../../styles.module.scss";
import { PageTransitionProvider } from "../provider";

const Layout: ServerLayout = (props) => {
  // eslint-disable-next-line no-console
  console.log("ssr render");
  return (
    <>
      <Link href="/sandbox/page-transition/ssr">
        <h3>SSR</h3>
      </Link>
      <div className={css.inputs}>
        <InputsAsClient />
        <InputsAsServer />
      </div>
      <PageTransitionProvider
        params={{ params: "ssr" }}
      >
        {props.children}
      </PageTransitionProvider>
    </>
  );
};

export default Layout;
