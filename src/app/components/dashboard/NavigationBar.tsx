"use client";

import { SignOutButton, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { navTopButtons, navBottomButtons } from "@/app/data/navButtonsData";

import Button from "../Button";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default function NavigationBar() {
  const path = usePathname();

  const [isSidebarVisible, setSidebarVisibility] = useState(false);

  return (
    <nav
      onMouseLeave={() => setSidebarVisibility(false)}
      onMouseEnter={() => setSidebarVisibility(true)}
      className={`${
        isSidebarVisible ? "w-[300px]" : "w-[120px]"
      } transition-all duration-300 ease-in-out h-screen sticky bg-sky-200 p-8 flex flex-col justify-between items-center`}
    >
      <div className="w-full flex flex-col justify-between">
        <div className="w-full h-[50px] flex justify-center items-center">
          LOGO
        </div>
        <div
          className={`w-full grid grid-cols-1 gap-5 mt-6`}
        >
          {navTopButtons.map((button) => {
            return (
              <Link href={button.path}>
                <Button
                  key={button.id}
                  variant={isSidebarVisible ? "navbarExtended" : "navbarRolled"}
                  id={button.id}
                >
                  {button.icon}
                  {isSidebarVisible && button.name}
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
      <div className={`w-full grid grid-cols-1 gap-5`}>
        {navBottomButtons.map((button) => {
          return (
            <Button
              key={button.id}
              variant={isSidebarVisible ? "navbarExtended" : "navbarRolled"}
              id={button.id}
            >
              {button.icon}
              {isSidebarVisible && button.name}
            </Button>
          );
        })}
      </div>
    </nav>
  );
}
