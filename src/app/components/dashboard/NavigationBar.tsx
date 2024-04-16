"use client";

import { SignOutButton } from "@clerk/nextjs";
import { LayoutDashboard, Warehouse, Search, Bell, Settings, LogOut } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

import Button from "../Button";

export default function NavigationBar() {
  const path = usePathname();

  const [isSidebarExtended, setSidebarExtension] = useState(false);

  return (
    <nav
      onMouseLeave={() => setSidebarExtension(false)}
      onMouseEnter={() => setSidebarExtension(true)}
      className={`${
        isSidebarExtended ? "w-[18%]" : "w-[9%]"
      } max-w-[350px] transition-all duration-300 ease-in-out h-screen sticky bg-sky-200 p-8 flex flex-col justify-between items-center`}
    >
      <div className="w-full h-[42%] max-h-[350px] flex flex-col justify-between">
        <div className="w-full h-[50px] flex justify-center items-center">
          LOGO
        </div>
        <div
          className={`w-full ${
            isSidebarExtended ? "h-[180px]" : "h-[220px]"
          } flex flex-col justify-between`}
        >
          <Button
            variant={isSidebarExtended ? "navbarExtended" : "navbarRolled"}
            data-id={"dashboard"}
          >
            <LayoutDashboard />
            {isSidebarExtended && "Dashboard"}
          </Button>
          <Button
            variant={isSidebarExtended ? "navbarExtended" : "navbarRolled"}
            data-id={"items"}
          >
            <Warehouse />
            {isSidebarExtended && "Items"}
          </Button>
          <Button
            variant={isSidebarExtended ? "navbarExtended" : "navbarRolled"}
            data-id={"searching"}
          >
            <Search />
            {isSidebarExtended && "Search"}
          </Button>
        </div>
      </div>
      <div
        className={`w-full ${
          isSidebarExtended ? "h-[180px]" : "h-[220px]"
        } flex flex-col justify-between`}
      >
        <Button variant={isSidebarExtended ? "navbarExtended" : "navbarRolled"}>
          <Bell />
          {isSidebarExtended && "Notifications"}
        </Button>
        <Button variant={isSidebarExtended ? "navbarExtended" : "navbarRolled"}>
          <Settings />
          {isSidebarExtended && "Settings"}
        </Button>
        <SignOutButton>
          <Button
            variant={isSidebarExtended ? "navbarExtended" : "navbarRolled"}
          >
            <LogOut />
            {isSidebarExtended && "Log Out"}
          </Button>
        </SignOutButton>
      </div>
    </nav>
  );
}
