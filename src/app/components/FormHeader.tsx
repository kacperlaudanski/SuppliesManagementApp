import { X } from "lucide-react";
import React from "react";
import Button from "./Button";

export default function FormHeader({name, onCloseModal}:{name: string, onCloseModal: () => void}) {
  return (
    <header className="w-full h-[70px] bg-[#1f2041] p-4 text-white flex justify-between items-center">
      <h1 className="text-lg tracking-widest">{name}</h1>
      <Button onClick={onCloseModal}>
        <X />
      </Button>
    </header>
  );
}
