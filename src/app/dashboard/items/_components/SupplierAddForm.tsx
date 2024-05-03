"use client";
import { PackageSearch } from "lucide-react";
import { useEffect, useRef } from "react";
import Button from "../../../components/Button";
import FormHeader from "../../../components/form/FormHeader";
import Input from "../../../components/form/Input";

interface SuppliersAddModal {
  openModal: boolean;
  onCloseModal: () => void;
}

export default function SupplierAddModal({
  openModal,
  onCloseModal,
}: SuppliersAddModal) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) return ref.current?.showModal();
    if (!openModal) return ref.current?.close();
  }, [openModal]);

  return (
    <dialog
      ref={ref}
      onClose={onCloseModal}
      className={"w-1/2 max-w-[800px] h-3/4 max-h-[800px] bg-neutral-100 rounded-lg"}
    >
      <FormHeader name={'ADD SUPPLIER'} onCloseModal={onCloseModal} />
      <form className="w-full p-4 flex flex-col 
      ">
        <div className="w-full">
          
          <Input type="text" placeholder="Name" variant="itemAddForm" />
        </div>
        <div className="w-full">
          <Input type="text" placeholder="Address" variant="itemAddForm" />
        </div>
        <div className="w-full">
          <Input type="email" placeholder="Email" variant="itemAddForm" />
        </div>
        <div className="w-full">
          <Input type="text" placeholder="Phone Number" variant="itemAddForm" />
        </div>
        <div className="w-full">
          <Input type="date" placeholder="Delivery Time" variant="itemAddForm" />
        </div>
        <Button>ADD SUPPLIER</Button>
      </form>
    </dialog>
  );
}
