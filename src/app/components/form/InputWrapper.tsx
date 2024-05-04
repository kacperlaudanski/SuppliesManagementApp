import { ReactNode } from "react";

interface InputWrapper {
  children: ReactNode;
  width: string;
  height:string
}

export default function InputWrapper({children, width, height}:InputWrapper) {
  return (
    <div
      className={`${width} ${height} bg-white flex relative items-center p-2 rounded-md`}
    >
      {children}
    </div>
  );
}
