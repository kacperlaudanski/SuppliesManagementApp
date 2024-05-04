import { useEffect, useRef } from "react";
import FormHeader from "../../../components/form/FormHeader";
import SupplierAddForm from "./SupplierAddForm";

interface SuppliersAddModal {
  openModal: boolean;
  onCloseModal: () => void;
}

export default function SupplierAddModal({openModal, onCloseModal}:SuppliersAddModal) {

  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (openModal) return ref.current?.showModal();
    if (!openModal) return ref.current?.close();
  }, [openModal]);

  return (
    <dialog
      ref={ref}
      onClose={onCloseModal}
      className={
        "w-1/2 max-w-[800px] h-1/2 max-h-[500px] bg-neutral-100 rounded-lg"
      }
    >
      <FormHeader name={"ADD SUPPLIER"} onCloseModal={onCloseModal} />
      <SupplierAddForm />
    </dialog>
  );
}
