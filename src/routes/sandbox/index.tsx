import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = () => {
  return {
    env: process.env,
  };
};

const Page = () => {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <span>
        env
      </span>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </>
  );
};

export default Page;
