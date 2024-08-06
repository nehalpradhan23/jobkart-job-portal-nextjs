"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";
import { SignedIn, SignOutButton, UserButton } from "@clerk/nextjs";

export default function Header({ user, profileInfo }) {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: !user,
    },
    {
      label: "Signup",
      path: "/sign-up",
      show: !user,
    },
    {
      label: "Activity",
      path: "/activity",
      show: profileInfo?.role === "candidate",
    },
    {
      label: "Jobs",
      path: "/jobs",
      show: user,
    },
    {
      label: "Membership",
      path: "/membership",
      show: user,
    },
    {
      label: "Account",
      path: "/account",
      show: user,
    },
  ];
  // ================================================
  return (
    <div>
      <header className="flex h-16 max-w-7xl mx-auto shrink-0 items-center px-5">
        {/* mobile navigation sidebar ============================= */}
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-background text-black lg:hidden hover:bg-gray-200">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-[200px] flex flex-col justify-between"
          >
            {/* <Link href={"#"} className="mr-6 hidden lg:flex">
              <h3>JOBKART</h3>
            </Link> */}
            {/* <div className="grid gap-2 py-6"> */}
            <div className="flex flex-col py-6 justify-between">
              {menuItems.map((item) =>
                item.show ? (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="flex w-full items-center py-2 text-lg font-bold hover:underline hover:scale-105 transition-all p-2 rounded-md"
                  >
                    {item.label}
                  </Link>
                ) : null
              )}
            </div>
            {/* <UserButton afterSwitchSessionUrl="/" /> */}
            <SignedIn>
              <SignOutButton
                redirectUrl="/"
                className="hover:underline font-bold"
              >
                Logout
              </SignOutButton>
            </SignedIn>
          </SheetContent>
        </Sheet>
        {/* ================================================== */}
        <Link
          href={"/"}
          className="hidden lg:flex mr-6 text-3xl font-bold text-slate-700"
        >
          JOBKART
        </Link>
        <nav className="ml-auto hidden lg:flex gap-5">
          {menuItems.map((item) =>
            item.show ? (
              <Link
                key={item.path}
                href={item.path}
                className="group inline-flex h-9 w-max items-center rounded-sm bg-white px-3 py-2 text-sm font-medium hover:bg-slate-800 hover:text-white transition-all"
              >
                {item.label}
              </Link>
            ) : null
          )}
          <UserButton afterSwitchSessionUrl="/" />
          {/* <SignOutButton redirectUrl="/" className="hover:underline text-sm">
            Logout
          </SignOutButton> */}
        </nav>
      </header>
    </div>
  );
}
