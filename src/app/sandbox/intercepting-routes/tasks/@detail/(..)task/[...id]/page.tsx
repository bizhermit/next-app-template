import { InterceptingRouteLinks } from "$/sandbox/intercepting-routes/links";

type Params = {
  id: Array<string>;
};

const Page: ServerPage<{ params: Params }> = async (props) => {
  const params = await props.params;

  return (
    <>
      <span>@detail: {JSON.stringify(params.id)}</span>
      <InterceptingRouteLinks replace />
    </>
  );
};

export default Page;
