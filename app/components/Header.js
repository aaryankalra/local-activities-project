import React from "react";
import Image from "next/image";
import { SquarePen, LogIn } from "lucide-react";
import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const USER_IMAGE =
  "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1385&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const Header = () => {
  return (
    <>
      <div className="navbar pt-2 bg-base-100 shadow-sm px-5 sm:px-12 text-primary">
        <div className="navbar-start">
          <a className="text-xl font-bold hover:cursor-default">LocalBuzz</a>
        </div>
        <div className="navbar-center">
          <button className="btn flex items-center gap-2">
            <span className="hidden sm:block">Create Event</span>
            <SquarePen size={20} />
          </button>
        </div>
        <div className="navbar-end flex gap-1">
          {/* <button className="btn btn-ghost rounded-full flex items-center gap-1">
            <span className="hidden sm:block">Sign In</span>
            <LogIn size={20} />
          </button>
          <Image
            className="rounded-full"
            src={USER_IMAGE}
            width={40}
            height={60}
          /> */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="btn btn-ghost rounded-full flex items-center gap-1">
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="btn btn-ghost rounded-full flex items-center gap-1">
                Create Account
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-2">
              <UserButton />
              <SignOutButton>
                <button className="btn btn-ghost rounded-full flex items-center gap-1">
                  Log Out
                </button>
              </SignOutButton>
            </div>
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default Header;
