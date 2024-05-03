'use client'
import Button from "@/app/components/Button";
import { Package, Truck } from "lucide-react";
import SearchBox from "@/app/dashboard/items/_components/SearchBox";
import AsideTab from "../../../components/AsideTab";
import ItemsAddModal from "./ItemsAddModal";
import { useState } from "react";
import SupplierAddModal from "./SupplierAddModal";

export default function ItemsAsideTab() {

  const [openItemsModal, setOpenItemsModal] = useState(false); 
  const [openSupplierModal, setOpenSupplierModal] = useState(false); 

  return (
    <>
    <AsideTab>
    <SearchBox />
      <div className="w-full flex flex-col justify-between items-center border-solid border-inherit">
        <Button variant={"asideActionButton"} onClick={() => setOpenSupplierModal(true)}>
          <Truck className="mx-2" />
          Add Supplier
        </Button>
        <Button variant={"asideActionButton"} onClick={() => setOpenItemsModal(true)}>
          <Package className="mx-2" />
          Add Item
        </Button>
      </div>
      <div className="w-full flex flex-col mt-4">
        <Button location={"asideTab"} variant={"asideSupplierButton"}>
          <Package className="mx-2" />
          All Items
        </Button>
        <ul className="w-full ml-4 mt-4 p-4 border-l-2 border-solid border-inherit">
          <Button variant={"asideSupplierButton"}>
            <Truck className="mx-2" />
            Supplier 1
          </Button>
          <Button variant={"asideSupplierButton"}>
            <Truck className="mx-2" />
            Supplier 2
          </Button>
        </ul>
      </div>
      <ItemsAddModal openModal={openItemsModal} onCloseModal={() => setOpenItemsModal(false)}/> 
      <SupplierAddModal openModal={openSupplierModal} onCloseModal={() => setOpenSupplierModal(false)} />
    </AsideTab>
    </>
  );
}
