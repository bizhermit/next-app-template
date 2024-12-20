import { InputsAsClient } from "../../../inputs-client";
import { InputsAsServer } from "../../../inputs-server";
import css from "../../../styles.module.scss";

const Layout: ServerLayout = (props) => {
  return (
    <>
      <h3>parent layer</h3>
      <div className={css.inputs}>
        <InputsAsClient />
        <InputsAsServer />
      </div>
      {props.children}
    </>
  );
};

export default Layout;
