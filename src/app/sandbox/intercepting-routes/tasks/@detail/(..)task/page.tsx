import { InterceptingRouteLinks } from "$/sandbox/intercepting-routes/links";

const Page: ServerPage = (_props) => {
  return (
    <>
      <span>@detail: add</span>
      <InterceptingRouteLinks replace />
    </>
  );
};

export default Page;
