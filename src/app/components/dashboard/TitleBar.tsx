"use client";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import Button from "../Button";

export default function TitleBar() {
  const path = usePathname();

  function getLastPathSegment(pathname: string) {
    if (!pathname) return;
    return pathname.substring(pathname.lastIndexOf("/") + 1);
  }

  return (
    <div className="min-w-full h-24 p-4 px-8 flex tracking-widest items-center justify-between shadow-[0px_9px_14px_0px_#00000024]">
      <h1 className="text-xl">{getLastPathSegment(path)?.toUpperCase()}</h1>
      <UserButton />
    </div>
  );
}
