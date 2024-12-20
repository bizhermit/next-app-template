import Link from "@/react/elements/link";

type Params = {
  id: string;
};

const Page: ServerPage<{ params: Params }> = async (props) => {
  const params = await props.params;
  return (
    <div>
      detail: {params.id}
      <Link href="/sandbox/paralell-route-modal">return list</Link>
    </div>
  );
};

export default Page;
