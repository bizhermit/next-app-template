type ParallelRoutes = "default" | "default_page" | "page_default" | "page_page";

const Layout: ServerLayout<{ parallel: ParallelRoutes }> = async (props) => {
  // eslint-disable-next-line no-console
  console.log("/parallel-routes layout");
  // eslint-disable-next-line no-console
  console.log(Object.keys(props));
  return (
    <>
      {props.children}
      {props.default_page}
      {props.default}
      {props.page_default}
      {props.page_page}
    </>
  );
};

export default Layout;
