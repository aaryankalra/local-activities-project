"use client";

import React from "react";
import { SquarePen, LogIn } from "lucide-react";
import {
  ClerkProvider,
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <>
      <div className="navbar pt-2 bg-base-100 shadow-sm px-5 sm:px-12 text-primary">
        <div className="navbar-start">
          <Link
            href="/"
            className="text-xl text-primary font-bold hover:cursor-default hover:cursor-pointer"
          >
            LocalBuzz
          </Link>
        </div>
        <div className="navbar-center">
          {isSignedIn ? (
            <Link href="/create">
              <button className="btn flex items-center gap-2">
                <span className="hidden sm:block">Create Event</span>
                <SquarePen size={20} />
              </button>
            </Link>
          ) : (
            <SignInButton mode="modal">
              <button className="btn flex items-center gap-2">
                <span className="hidden sm:block">Create Event</span>
                <SquarePen size={20} />
              </button>
            </SignInButton>
          )}
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
