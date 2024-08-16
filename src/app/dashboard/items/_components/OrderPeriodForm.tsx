import Button from "@/app/components/Button";
import Input from "@/app/components/form/Input";
import InputWrapper from "@/app/components/form/InputWrapper";
import { ChangeEvent, FormEvent, useState } from "react";

interface OrderPeriodData {
  stockCreationCost: number | null;
  priceFraction: number | null;
  buyingPrice: number | null;
  demandForecast: number | null;
}

const initValue: OrderPeriodData = {
  stockCreationCost: null,
  priceFraction: null,
  buyingPrice: null,
  demandForecast: null,
};

export default function OrderPeriodForm() {
  const [optimalOrderData, setOptimalOrderData] = useState(initValue);

  const [optimalOrderPeriod, setOptimalOrderPeriod] = useState<number>();

  function inputHandler(e: ChangeEvent<HTMLInputElement>) {
    setOptimalOrderData((data) => ({
      ...data,
      [e.target.id]: parseFloat(e.target.value),
    }));
    console.log(optimalOrderData)
  }

  function calculateOptimalOrderPeriod(optimalOrderData: OrderPeriodData){
    const {stockCreationCost, priceFraction, buyingPrice, demandForecast} = optimalOrderData; 
    if(stockCreationCost && priceFraction && buyingPrice && demandForecast){
        const oprimalOrderPeriod = Math.sqrt((Math.pow(360, 2) * 2 * stockCreationCost)/(priceFraction * buyingPrice * demandForecast)); 
        setOptimalOrderPeriod(Math.round(oprimalOrderPeriod))
    }
  }

  function handleOrderPeriodForm(e: FormEvent) {
    e.preventDefault();
    calculateOptimalOrderPeriod(optimalOrderData);
  }

  return (
    <>
      <form
        className="flex flex-col gap-4 p-4"
        onSubmit={handleOrderPeriodForm}
      >
        <label htmlFor="stock-cost" className="text-sm text-neutral-600">
          Stock Creation Cost
        </label>
        <InputWrapper width="w-full" height="h-[40px]">
          <Input
            className="bg-neutral-200"
            placeholder="100"
            type="number"
            name="stock-cost"
            id="stockCreationCost"
            onChange={inputHandler}
            step='0.01'
          />
        </InputWrapper>
        <label htmlFor="price-fraction" className="text-sm text-neutral-600">
          Price Fraction
        </label>
        <InputWrapper width="w-full" height="h-[40px]">
          <Input
            className="bg-neutral-200"
            placeholder="0.1"
            type="number"
            name="price-fraction"
            id="priceFraction"
            onChange={inputHandler}
            step='0.1'
          />
        </InputWrapper>
        <label htmlFor="buying-price" className="text-sm text-neutral-600">
          Buying Price
        </label>
        <InputWrapper width="w-full" height="h-[40px]">
          <Input
            className="bg-neutral-200 text-neutral-600"
            placeholder="200"
            type="number"
            name="buying-price"
            id="buyingPrice"
            onChange={inputHandler}
            step='0.01'
          />
        </InputWrapper>
        <label htmlFor="demand-forecast" className="text-sm text-neutral-600">
          Demand Forecast (yearly)
        </label>
        <InputWrapper width="w-full" height="h-[40px]">
          <Input
            className="bg-neutral-200"
            placeholder="30000"
            type="number"
            name="demand-forecast"
            id="demandForecast"
            onChange={inputHandler}
            step='0.1'
          />
        </InputWrapper>
        <Button type="submit" variant={"calculationModal"}>
          Calculate
        </Button>
      </form>
      <div className="w-full px-4 text-neutral-600">
        Optimal Order Period: <span className="text-2xl">{optimalOrderPeriod} days</span>
      </div>
    </>
  );
}
