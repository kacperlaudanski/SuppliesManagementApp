import { Metadata } from "next";
import { ReactNode } from "react";
import AsideTab from "@/app/components/items/AsideTab";
import Button from "@/app/components/Button";
import { Package, Truck } from "lucide-react";
import SearchingBox from "@/app/components/items/SearchingBox";

export const metadata: Metadata = {
  title: "Items - StockWise",
};
export default function ItemsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AsideTab>
        <SearchingBox /> 
        <div className="w-full flex flex-col justify-between items-center border-solid border-inherit">
          <Button variant={'asideActionButton'}><Truck className="mx-2"/>Add Supplier</Button>
          <Button variant={'asideActionButton'}><Package className="mx-2"/>Add Item</Button>
        </div>
        <div className="w-full flex flex-col mt-4">
          <Button location={"asideTab"} variant={"asideSupplierButton"}>
            <Package className="mx-2" />
            All Items
          </Button>
          <ul className="w-full ml-4 mt-4 p-4 border-l-2 border-solid border-inherit">
            <Button variant={"asideSupplierButton"}>
              <Truck className="mx-2"/>
              Supplier 1
            </Button>
            <Button variant={"asideSupplierButton"}>
              <Truck className="mx-2"/>
              Supplier 2
            </Button>
          </ul>
        </div>
      </AsideTab>
      {children}
    </>
  );
}
