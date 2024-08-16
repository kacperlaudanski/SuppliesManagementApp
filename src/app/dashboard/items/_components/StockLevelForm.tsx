import Button from "@/app/components/Button"
import Input from "@/app/components/form/Input"
import InputWrapper from "@/app/components/form/InputWrapper"
import { ChangeEvent, FormEvent, useState } from "react"


interface MinMaxStockLevel {
  demandForecast: number | null; 
  avgDeliveryTime: number | null; 
  optimalOrderPeriod: number | null; 
  forecastErrDeviation: number | null; 
  customerServiceLvl: number | null; 
}

export default function StockLevelForm() {

  const initValue: MinMaxStockLevel = {
    demandForecast: null, 
    avgDeliveryTime: null,
    optimalOrderPeriod: null,
    forecastErrDeviation: null, 
    customerServiceLvl: null
  }

  const [stockLvlData, setStockLvlData] = useState(initValue)

  const [maxStockLevel, setMaxStateLvl] = useState<number>()
  const [minStockLevel, setMinStateLvl] = useState<number>()

  function inputHandler(e: ChangeEvent<HTMLInputElement>){
      setStockLvlData(stockData => ({
        ...stockData,
        [e.target.id]: parseFloat(e.target.value)
      }))
  }

  // function calculateStockLevel(stockData: MinMaxStockLevel){
  //   const {demandForecast, avgDeliveryTime, optimalOrderPeriod, customerServiceLvl, forecastErrDeviation} = stockData; 
  //   if(demandForecast && avgDeliveryTime && optimalOrderPeriod && forecastErrDeviation && customerServiceLvl){
  //     calculateMaxStockLevel(demandForecast, avgDeliveryTime, optimalOrderPeriod, customerServiceLvl, forecastErrDeviation)
  //   }
  // }

  function calculateMaxStockLevel(stockData: MinMaxStockLevel){
    const {demandForecast, avgDeliveryTime, optimalOrderPeriod, customerServiceLvl, forecastErrDeviation} = stockData; 
    if(demandForecast && avgDeliveryTime && optimalOrderPeriod && forecastErrDeviation && customerServiceLvl){
      const maxStockLevel = demandForecast * (avgDeliveryTime + optimalOrderPeriod) + customerServiceLvl * forecastErrDeviation * Math.sqrt(avgDeliveryTime + optimalOrderPeriod);
      setMaxStateLvl(Math.round(maxStockLevel)); 
     }
  }


  function calculateMinStockLevel(stockData: MinMaxStockLevel){
    const {demandForecast, avgDeliveryTime, optimalOrderPeriod, customerServiceLvl, forecastErrDeviation} = stockData; 
    if(demandForecast && avgDeliveryTime && optimalOrderPeriod && forecastErrDeviation && customerServiceLvl){
      const minStockLevel = demandForecast * avgDeliveryTime + customerServiceLvl * forecastErrDeviation * Math.sqrt(avgDeliveryTime);
      setMinStateLvl(Math.round(minStockLevel)); 
    }
  }

  function handleStockLvlForm(e: FormEvent){
     e.preventDefault()
     calculateMaxStockLevel(stockLvlData)
     calculateMinStockLevel(stockLvlData)
     setStockLvlData(initValue)
  }

  return (
    <form onSubmit={handleStockLvlForm} className="flex flex-col gap-4 p-4">
      <label htmlFor="demand-forecast" className="text-sm text-neutral-600">Demand Forecast</label>
      <InputWrapper width="w-full" height="h-[40px]">
        <Input className="bg-neutral-200 text-neutral-600" placeholder="e.g. 300000" name="demand-forecast" id='demandForecast' type='number' required onChange={inputHandler}/>
      </InputWrapper>
      <label htmlFor="average-delivery-time" className="text-sm text-neutral-600">Average Delivery Time (days)</label>
      <InputWrapper width="w-full" height="h-[40px]">
        <Input className="bg-neutral-200 text-neutral-600" placeholder="e.g. 2 days" name="average-delivery-time" id='avgDeliveryTime' type='number' required onChange={inputHandler}/>
      </InputWrapper>
      <label htmlFor="optimal-order-period" className="text-sm text-neutral-600">Optimal Order Period (days)</label>
      <InputWrapper width="w-full" height="h-[40px]">
        <Input className="bg-neutral-200 text-neutral-600" placeholder="e.g. 7 days" name="optimal-order-period" id='optimalOrderPeriod' type='number' required onChange={inputHandler}/>
      </InputWrapper>
      <label htmlFor="forecast-error-deviation" className="text-sm text-neutral-600">Forecast Error Deviation</label>
      <InputWrapper width="w-full" height="h-[40px]">
        <Input className="bg-neutral-200 text-neutral-600" placeholder="e.g. 32" name="forecast-error-deviation" id='forecastErrDeviation' type='number' required onChange={inputHandler}/>
      </InputWrapper>
      <label htmlFor="customer-service-level" className="text-sm text-neutral-600">Customer Service Level</label>
      <InputWrapper width="w-full" height="h-[40px]">
        <Input className="bg-neutral-200 text-neutral-600" placeholder="e.g. 1,04" name="customer-service-level" id='customerServiceLvl' type='number' required onChange={inputHandler}/>
      </InputWrapper>
      <Button variant={"calculationModal"} type='submit'>Calculate</Button>
      <div className="w-full justify-around flex gap-2">
        <div>Min Stock Level: <span className="text-2xl">{minStockLevel} pallets</span></div>
        <div>Max Stock Level: <span className="text-2xl">{maxStockLevel} pallets</span></div>
      </div>
    </form>
  )
}
