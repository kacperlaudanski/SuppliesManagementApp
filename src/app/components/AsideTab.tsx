"use client";
import { ChevronLeft, FolderOpen } from "lucide-react";
import { ReactNode, useState } from "react";
import Button from "./Button"

export default function AsideTab({ children }: { children: ReactNode }) {
  const [isAsideVisible, setAsideVisibility] = useState(false);

  return (
    <aside
      className={`${
        isAsideVisible ? "w-[270px]" : "w-[50px]"
      } h-full bg-white relative border-t-2 border-inherit border-solid transition-all duration-300 ease-in-out shadow-[0px_9px_14px_0px_#00000024]`}
    >
      <Button
        variant={"showAsideTab"}
        location={"asideTab"}
        onClick={() => setAsideVisibility((prev) => !prev)}
      >
        {isAsideVisible ? <ChevronLeft /> : <FolderOpen />}
      </Button>
      <div className={`w-full h-full p-6 ${isAsideVisible ? 'opacity-100' : 'opacity-0'} flex-col items-left transition-all duration-200 ease-in-out`}>{children}</div>
    </aside>
  );
}
