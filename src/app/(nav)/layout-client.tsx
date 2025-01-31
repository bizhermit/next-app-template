"use client";

import { useLang } from "@/i18n/react-hook";
import { Button } from "@/react/elements/button";
import useRouter from "@/react/hooks/router";
import { signOut } from "next-auth/react";
import { signInPageUrl } from "~/auth/consts";

export const SignOutButton = () => {
  const lang = useLang();
  const router = useRouter();

  return (
    <Button
      onClick={async () => {
        await signOut({
          redirect: false,
        });
        router.push(signInPageUrl);
      }}
    >
      {lang("auth.signOutBtn")}
    </Button>
  );
};
