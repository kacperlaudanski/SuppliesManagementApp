import Button from "@/app/components/Button";
import Input from "@/app/components/form/Input";
import InputWrapper from "@/app/components/form/InputWrapper";

export default function OrderPeriodForm() {
  return (
    <>
      <form className="flex flex-col gap-4 p-4">
        <label htmlFor="stock-cost" className="text-sm text-neutral-600">
          Stock Creation Cost
        </label>
        <InputWrapper width="w-full" height="h-[40px]">
          <Input
            className="bg-neutral-200"
            placeholder="100"
            type="number"
            name="stock-cost"
            id="stock-cost"
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
            id="price-fraction"
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
            id="buying-price"
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
            id="demand-forecast"
          />
        </InputWrapper>
        <Button variant={"calculationModal"}>Calculate</Button>
      </form>
      <div className="w-full px-4 text-neutral-600">
        Optimal Order Period: <span className="text-2xl">X days</span>
      </div>
    </>
  );
}
