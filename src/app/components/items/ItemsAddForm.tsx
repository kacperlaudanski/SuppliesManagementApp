import Input from "../form/Input";
import Button from "../Button";
import InputWrapper from "../form/InputWrapper";
import SelectOption from "../form/SelectOption";
import SelectWrapper from "../form/SelectWrapper";
import TextareaInput from "../form/TextareaInput";
import {
    Album,
    Boxes,
    OctagonAlert,
    PackagePlus,
    PackageSearch,
    Truck,
  } from "lucide-react";

export default function ItemsAddForm() {
  return (
    <form className="w-full h-[75%] my-4 p-4 flex flex-col justify-between">
      <InputWrapper width="w-full">
        <PackageSearch />
        <Input type="text" placeholder="Name" variant="name" />
      </InputWrapper>
      <div className="w-full flex justify-between gap-4">
        <InputWrapper width="w-3/4">
          <Boxes />
          <Input type="number" placeholder="Quantity" variant="quantity" />
        </InputWrapper>
        <InputWrapper width="w-auto">
          <OctagonAlert />
          <Input
            type="number"
            placeholder="Min Quantity"
            variant="minQuantity"
          />
        </InputWrapper>
      </div>
      <div className="w-full h-[70px] bg-neutral-200 rounded-md flex justify-center items-center">
        IMAGE ADDING
      </div>
      <div className="w-full flex gap-4">
        <div className="w-1/2 h-[40px] flex items-center p-2 bg-white rounded-md">
          <Truck />
          <SelectWrapper>
            <SelectOption name={"Option 1"} />
            <SelectOption name={"Option 2"} />
            <SelectOption name={"Option 3"} />
            <SelectOption name={"Option 4"} />
          </SelectWrapper>
        </div>
        <div className="w-1/2 h-[40px] flex items-center p-2 bg-white rounded-md">
          <Album />
          <SelectWrapper>
            <SelectOption name={"Category 1"} />
            <SelectOption name={"Category 2"} />
            <SelectOption name={"Category 3"} />
            <SelectOption name={"Category 4"} />
          </SelectWrapper>
        </div>
      </div>
      <TextareaInput placeholder={"Description (optional)"} />
      <Button variant={"formSubmit"}>
        <PackagePlus className="mx-2" />
        Add Item
      </Button>
    </form>
  );
}
