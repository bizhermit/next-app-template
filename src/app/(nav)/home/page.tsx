import { auth } from "~/auth/next-auth";

const Page = async () => {
  const session = await auth();

  return (
    <div>
      <h1>SignedIn</h1>
      <span>{session?.user?.email}</span>
      <span>{session?.user?.state}</span>
    </div>
  );
};

export default Page;
