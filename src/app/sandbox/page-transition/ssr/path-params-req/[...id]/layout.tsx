import { InputsAsClient } from "../../../../inputs-client";
import { InputsAsServer } from "../../../../inputs-server";
import css from "../../../../styles.module.scss";
import { Links } from "../links";

type Params = {
  id: Array<string>;
};

const Layout: ServerLayout<{ params: Params }> = async (props) => {
  const params = await props.params;
  // eslint-disable-next-line no-console
  console.log("layout", params);

  return (
    <div className={css.layout}>
      <div>
        <h3>layout</h3>
        <span>{JSON.stringify(params)}</span>
        <div className={css.inputs}>
          <InputsAsClient />
          <InputsAsServer />
        </div>
        <Links />
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
