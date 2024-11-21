import { useLoaderData } from "@remix-run/react";

export const useLoaderResponseData = <T>() => {
  const data = useLoaderData<T>();
  return JSON.parse(data as string);
};
