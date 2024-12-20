import Link from "@/react/elements/link";
import { sleep } from "@/utilities/sleep";

type Params = {
  id: string;
};

const Page: ServerPage<{ params: Params }> = async (props) => {
  await sleep(1500);
  const params = await props.params;
  return (
    <div>
      @detail: {params.id}
      <ul>
        <li>
          <Link href="/sandbox/paralell-route-modal/[id]" params={{ id: 1 }} replace>detail 1</Link>
        </li>
        <li>
          <Link href="/sandbox/paralell-route-modal/[id]" params={{ id: 2 }} replace>detail 2</Link>
        </li>
        <li>
          <Link href="/sandbox/paralell-route-modal/[id]" params={{ id: 3 }} replace>detail 3</Link>
        </li>
        <li>
          <Link href="/sandbox/paralell-route-modal">to list</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
