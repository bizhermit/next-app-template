"use client";

import Link from "@/react/elements/link";
import { InputsAsClient } from "../../inputs-client";
import { InputsAsServer } from "../../inputs-server";
import css from "../../styles.module.scss";
import { PageTransitionProvider } from "../provider";

const Layout: ClientLayout = (props) => {
  // eslint-disable-next-line no-console
  console.log("csr render");
  return (
    <>
      <Link href="/sandbox/page-transition/csr">
        <h3>CSR</h3>
      </Link>
      <div className={css.inputs}>
        <InputsAsClient />
        <InputsAsServer />
      </div>
      <PageTransitionProvider
        params={{ params: "csr" }}
      >
        {props.children}
      </PageTransitionProvider>
    </>
  );
};

export default Layout;
