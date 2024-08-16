import Button from "@/app/components/Button"
import Input from "@/app/components/form/Input"
import InputWrapper from "@/app/components/form/InputWrapper"



export default function StockLevelForm() {

  function handleStockLvlForm(){
     console.log('calculating...')
  }

  return (
    <form onSubmit={handleStockLvlForm} className="flex flex-col gap-4 p-4">
      <label htmlFor="demand-forecast" className="text-sm text-neutral-600">Demand Forecast</label>
      <InputWrapper width="w-full" height="h-[40px]">
        <Input className="bg-neutral-200 text-neutral-600" placeholder="e.g. 300000" name="demand-forecast" id='demand-forecast' type='number' required/>
      </InputWrapper>
      <label htmlFor="average-delivery-time" className="text-sm text-neutral-600">Average Delivery Time (days)</label>
      <InputWrapper width="w-full" height="h-[40px]">
        <Input className="bg-neutral-200 text-neutral-600" placeholder="e.g. 2 days" name="average-delivery-time" id='average-delivery-time' type='number' required/>
      </InputWrapper>
      <label htmlFor="optimal-order-period" className="text-sm text-neutral-600">Optimal Order Period (days)</label>
      <InputWrapper width="w-full" height="h-[40px]">
        <Input className="bg-neutral-200 text-neutral-600" placeholder="e.g. 7 days" name="optimal-order-period" id='optimal-order-period' type='number' required/>
      </InputWrapper>
      <label htmlFor="forecast-error-deviation" className="text-sm text-neutral-600">Forecast Error Deviation</label>
      <InputWrapper width="w-full" height="h-[40px]">
        <Input className="bg-neutral-200 text-neutral-600" placeholder="e.g. 32" name="forecast-error-deviation" id='forecast-error-deviation' type='number' required/>
      </InputWrapper>
      <label htmlFor="customer-service-level" className="text-sm text-neutral-600">Customer Service Level</label>
      <InputWrapper width="w-full" height="h-[40px]">
        <Input className="bg-neutral-200 text-neutral-600" placeholder="e.g. 1,04" name="customer-service-level" id='customer-service-level' type='number' required/>
      </InputWrapper>
      <Button variant={"calculationModal"}>Calculate</Button>
      <div className="w-full justify-around flex gap-2">
        <div>Min Stock Level: <span className="text-2xl">X pcs</span></div>
        <div>Max Stock Level: <span className="text-2xl">X pcs</span></div>
      </div>
    </form>
  )
}
