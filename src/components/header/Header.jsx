"use client";

import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";

export default function Header() {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: true,
    },
    {
      label: "Signup",
      path: "/sing-up",
      show: true,
    },
  ];
  // ================================================
  return (
    <div>
      <header className="flex h-16 w-full shrink-0 items-center bg-gray-100 px-5">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="bg-background text-black lg:hidden hover:bg-gray-200">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[200px]">
            <Link href={"#"} className="mr-6 hidden lg:flex">
              <h3>JOBKART</h3>
            </Link>
            <div className="grid gap-2 py6">
              {menuItems.map((item) =>
                item.show ? (
                  <Link
                    href={item.path}
                    className="flex w-full items-center py-2 text-lg font-bold hover:underline hover:scale-105 transition-all p-2 rounded-md"
                  >
                    {item.label}
                  </Link>
                ) : null
              )}
            </div>
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
                href={item.path}
                className="group inline-flex h-9 w-max items-center rounded-sm bg-white px-3 py-2 text-sm font-medium hover:bg-slate-800 hover:text-white transition-all"
              >
                {item.label}
              </Link>
            ) : null
          )}
        </nav>
      </header>
    </div>
  );
}
