"use client";

import React from "react";
import { LoginLink, RegisterLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { buttonVariants } from "../ui/button";

export default function UserActions({ user }) {
  return user ? (
    <div className="flex items-center gap-4">
      <p className="text-md font-medium">{user.given_name}</p>
      <LogoutLink className={buttonVariants()}>
        Logout
      </LogoutLink>
    </div>
  ) : (
    <div className="flex items-center gap-4">
      <LoginLink className={buttonVariants()}>Login In</LoginLink>
      <RegisterLink className={buttonVariants({ variant: "secondary" })}>
        Sign up
      </RegisterLink>
    </div>
  );
}
