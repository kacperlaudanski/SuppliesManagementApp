"use client";
import { Album, Boxes, OctagonAlert, PackageSearch, Truck } from "lucide-react";
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
      className={
        "w-1/2 max-w-[800px] h-4/5 max-h-[800px] bg-neutral-100 rounded-lg"
      }
    >
      <FormHeader name={"ADD ITEM"} onCloseModal={onCloseModal} />
      <form className="w-full h-full my-4 p-4 flex flex-col justify-between">
        <div className="w-full h-[40px] bg-white flex relative items-center p-2 rounded-md">
          <PackageSearch />
          <Input type="text" placeholder="Name" variant="name" />
        </div>
        <div className="w-full flex justify-between gap-4">
          <div className="w-3/4 h-[40px] bg-white relative flex items-center p-2 rounded-md">
            <Boxes />
            <Input type="number" placeholder="Quantity" variant="quantity" />
          </div>
          <div className="h-[40px] p-2 bg-white flex items-center flex-grow rounded-md">
            <OctagonAlert />
            <Input
              type="number"
              placeholder="Min Quantity"
              variant="minQuantity"
            />
          </div>
        </div>

        <div className="w-full h-[70px] bg-neutral-200 rounded-md flex justify-center items-center">
          IMAGE ADDING
        </div>
        <div className="w-full flex gap-4">
          <div className="w-1/2 h-[40px] flex items-center p-2 bg-white rounded-md">
            <Truck />
            <select className="w-full text-neutral-400 mx-2 outline-none">
              <option>Supplier 1</option>
              <option>Supplier 2</option>
              <option>Supplier 3</option>
              <option>Supplier 4</option>
            </select>
          </div>
          <div className="w-1/2 h-[40px] flex items-center p-2 bg-white rounded-md">
            <Album />
            <select className="w-full text-neutral-400 mx-2 outline-none">
              <option>Category 1</option>
              <option>Category 2</option>
              <option>Category 3</option>
              <option>Category 4</option>
            </select>
          </div>
        </div>

        <textarea
          placeholder="Description"
          className="w-full h-[100px]"
        ></textarea>
        <Button>ADD ITEM</Button>
      </form>
    </dialog>
  );
}
