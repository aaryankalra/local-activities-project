import { useUser } from "@clerk/nextjs";
import React from "react";

const Example = () => {
  const { user, isSignedIn } = useUser();

  if (!isSignedIn) {
    return (
      <h1 className="text-4xl font-bold">Please Sign In Or Create Account</h1>
    );
  }

  return <h1>Hello {user.firstName}</h1>;
};

export default Example;
