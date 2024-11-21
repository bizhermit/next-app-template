import Link from "@/react/elements/link/next";

type Props = {
  replace?: boolean;
};

export const InterceptingRouteLinks = ({ replace }: Props) => {
  return (
    <ul>
      <li>
        <Link href="/sandbox/intercepting-routes/tasks" replace={replace}>tasks</Link>
      </li>
      <li>
        <Link href="/sandbox/intercepting-routes/task/[[...id]]" replace={replace}>task add</Link>
      </li>
      <li>
        <Link href="/sandbox/intercepting-routes/task/[[...id]]" params={{ id: 1 }} replace={replace}>detail 1</Link>
      </li>
      <li>
        <Link href="/sandbox/intercepting-routes/task/[[...id]]" params={{ id: 2 }} replace={replace}>detail 2</Link>
      </li>
      <li>
        <Link href="/sandbox/intercepting-routes/task/[[...id]]" params={{ id: 3 }} replace={replace}>detail 3</Link>
      </li>
    </ul>
  );
};
