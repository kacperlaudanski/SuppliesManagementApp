import FormHeader from "@/app/components/form/FormHeader";
import { useEffect, useRef } from "react";

interface OrderPeriodModal {
  openModal: boolean;
  onCloseModal: () => void;
}

export default function OrderPeriodModal({
  openModal,
  onCloseModal,
}: OrderPeriodModal) {
    
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) ref.current?.showModal();
    if (!openModal) ref.current?.close();
  }, [openModal]);

  return (
    <dialog
      onClose={onCloseModal}
      ref={ref}
      className="w-1/2 h-[400px] bg-neutral-400"
    >
      <FormHeader name={"Calculate OOP"} onCloseModal={onCloseModal} />
      <div>Zawartość</div>
    </dialog>
  );
}
