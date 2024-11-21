import Link from "@/react/elements/link/remix";

const Page = () => {
  return (
    <>
      <h1>Remix-App Template</h1>
      {/* <h2>{lang("common.halloWorld")}</h2> */}
      <ul>
        <li>
          <Link href="/sign-in">SignIn</Link>
        </li>
        <li>
          <Link href="/sandbox">sandbox</Link>
        </li>
      </ul>
    </>
  );
};

export default Page;
