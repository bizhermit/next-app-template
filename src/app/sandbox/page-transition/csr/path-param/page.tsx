"use client";

import { use } from "react";
import { InputsAsClient } from "../../../inputs-client";
import { InputsAsServer } from "../../../inputs-server";
import css from "../../../styles.module.scss";
import { Links } from "./links";

type Params = {
  id?: string;
};

const Page: ClientPage<{ params: Params; }> = (props) => {
  const params = use(props.params);
  // eslint-disable-next-line no-console
  console.log("layout", params);
  return (
    <>
      <h3>page (parent)</h3>
      <span>{params.id}</span>
      <div className={css.inputs}>
        <InputsAsClient />
        <InputsAsServer />
      </div>
      <Links />
    </>
  );
};

export default Page;
