'use client'

import ItemsAsideTab from "@/app/dashboard/items/_components/ItemsAsideTab";
import { FormEvent, useState } from "react";
import OrderPeriodModal from "./_components/OrderPeriodModal";
import StockLevelModal from "./_components/StockLevelModal";

export default function Items() {

  const [openOrderPeriodModal, setOpenOrderPeriodModal] = useState(false); 
  const [openStockLevelModal, setOpenStockLevelModal] = useState(false); 

  function handleButtonClick(event: FormEvent){
    if(event !== null && event.target !== null) {
      const clickedButton = event.target as Element
      if(clickedButton.matches(`[data-order-period-btn]`)){
        setOpenOrderPeriodModal(true)
      }
      if(clickedButton.matches(`[data-stock-lvl-btn]`)){
        setOpenStockLevelModal(true)
      }
    }
  }

  return (
    <main className="w-full h-full flex">
      <ItemsAsideTab />
      <section className="w-full h-[100px] bg-neutral-100 p-10 flex justify-end items-center">
        <div className="w-1/2 flex justify-between gap-4" onClick={(e) => handleButtonClick(e)}>
          <button className="w-1/2 h-[40px] border-2 border-black rounded-md" data-order-period-btn>
            Calculate OOP
          </button>
          <button className="w-1/2 h-[40px] border-2 border-black rounded-md" data-stock-lvl-btn>
            Calculate Min/Max Stock Level
          </button>
        </div>
      </section>
      <OrderPeriodModal openModal={openOrderPeriodModal} onCloseModal={() => setOpenOrderPeriodModal(false)}/>
      <StockLevelModal openModal={openStockLevelModal} onCloseModal={() => setOpenStockLevelModal(false)} /> 
    </main>
  );
}
