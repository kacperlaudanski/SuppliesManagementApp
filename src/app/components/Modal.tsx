import { ReactNode, useEffect, useRef } from "react";
import FormHeader from "./form/FormHeader";

interface Modal {
  name: string;
  openModal: boolean;
  onCloseModal: () => void;
  children: ReactNode;
  styles: string;
}

export default function Modal({name, openModal, onCloseModal, children, styles}: Modal) {

  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (openModal) ref.current?.showModal();
    if (!openModal) ref.current?.close();
  }, [openModal]);

  return (
    <dialog ref={ref} onClose={onCloseModal} className={styles}>
      <FormHeader name={name} onCloseModal={onCloseModal} />
      {children}
    </dialog>
  );
}
