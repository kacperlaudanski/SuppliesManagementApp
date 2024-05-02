import { ReactNode } from "react";

export default function InputWrapper({
  children,
  width,
}: {
  children: ReactNode;
  width: string;
}) {
  return (
    <div
      className={`${width} h-[40px] bg-white flex relative items-center p-2 rounded-md`}
    >
      {children}
    </div>
  );
}
