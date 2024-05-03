"use client";

import { useEffect, useRef } from "react";
import ItemsAddForm from "./ItemsAddForm";
import FormHeader from "../../../components/form/FormHeader";


interface ItemAddModal {
  openModal: boolean;
  onCloseModal: () => void;
}

export default function ItemsAddModal({ openModal, onCloseModal }: ItemAddModal) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) return ref.current?.showModal();
    if (!openModal) return ref.current?.close();
  }, [openModal]);

  return (
    <dialog onClose={onCloseModal} ref={ref} className={"w-1/2 max-w-[800px] h-[85%] max-h-[700px] bg-neutral-100 rounded-lg"}>
      <FormHeader name={"ADD ITEM"} onCloseModal={onCloseModal} />
      <ItemsAddForm />
    </dialog>
  );
}
