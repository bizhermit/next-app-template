import { HomeIcon } from "@/react/elements/icon";
import { Navigation } from "@/react/elements/navigation";
import { NavMenuLink } from "@/react/elements/navigation/menu";
import { SignOutButton } from "./layout-client";
import css from "./layout.module.scss";

const Layout: ServerLayout = ({ children }) => {
  return (
    <Navigation
      header={<Header />}
      headerClassName={css.header}
      content={children}
    >
      <NavMenuLink
        url="/home"
        icon={<HomeIcon />}
      >
        HOME
      </NavMenuLink>
    </Navigation>
  );
};

const Header = () => {
  return (
    <div className={css.signout}>
      <SignOutButton />
    </div>
  );
};

export default Layout;
