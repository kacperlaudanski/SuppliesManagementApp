import FormHeader from "@/app/components/form/FormHeader";
import { useEffect, useRef } from "react";

interface StockLevelModal {
  openModal: boolean;
  onCloseModal: () => void;
}

export default function StockLevelModal({openModal, onCloseModal}: StockLevelModal) {

const ref = useRef<HTMLDialogElement>(null); 

useEffect(() => {
  if(openModal) ref.current?.showModal();
  if(!openModal) ref.current?.close(); 
},[openModal])

  return (
    <dialog ref={ref} onClose={onCloseModal} className="w-1/2 h-[400px] bg-neutral-400">
      <FormHeader name="Calculate Min/Max Stock Level" onCloseModal={onCloseModal}/>
      <div>
        Zawartość
      </div>
    </dialog>
  )
}
