import { ReactNode } from "react";

export default function SelectWrapper({children}: {children: ReactNode}) {
  return (
    <select className="w-full text-neutral-400 mx-2 outline-none">
      {children}
    </select>
  );
}
