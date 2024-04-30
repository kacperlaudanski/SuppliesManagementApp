"use client";
import { useEffect, useRef } from "react";
import Button from "../Button";
import FormHeader from "../FormHeader";
import Input from "../Input";

interface ItemAddForm {
  openModal: boolean;
  onCloseModal: () => void;
}

export default function ItemsAddForm({ openModal, onCloseModal }: ItemAddForm) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (openModal) return ref.current?.showModal();
    if (!openModal) return ref.current?.close();
  }, [openModal]);

  return (
    <dialog
      onClose={onCloseModal}
      ref={ref}
      className={"w-1/2 bg-neutral-100 rounded-lg"}
    >
      <FormHeader onCloseModal={onCloseModal}/>
      <form className="w-full p-4 flex flex-col">
        <div className='w-full'>
          <Input type='text' placeholder='Name' variant='itemAddForm'/> 
        </div>
        <div className='w-full'>
          <Input type='number' placeholder='Quantity' variant='itemAddForm'/> 
        </div>
        <div className='w-full'>
          <Input type='number' placeholder='Min Quantity' variant='itemAddForm'/> 
        </div>
        <div className="w-full h-[70px] bg-neutral-300 flex justify-center items-center">IMAGE ADDING</div>
        <div className='w-full'>
          <Input type='text' placeholder='Name' variant='itemAddForm'/> 
        </div>
        <select className="w-full">
          <option>Supplier 1</option>
          <option>Supplier 2</option>
          <option>Supplier 3</option>
          <option>Supplier 4</option>
        </select>
        <select className="w-full">
          <option>Category 1</option>
          <option>Category 2</option>
          <option>Category 3</option>
          <option>Category 4</option>
        </select>
        <textarea placeholder="Description" className="w-full h-[100px]"></textarea>
        <Button>ADD ITEM</Button>
      </form>
    </dialog>
  );
}
