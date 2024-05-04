import Input from "../../../components/form/Input";
import Button from "../../../components/Button";
import InputWrapper from "../../../components/form/InputWrapper";
import SelectOption from "../../../components/form/SelectOption";
import SelectWrapper from "../../../components/form/SelectWrapper";
import {
  Album,
  Boxes,
  Image,
  OctagonAlert,
  PackagePlus,
  PackageSearch,
  Text,
  Truck,
} from "lucide-react";
import { FormEvent } from "react";

export default function ItemsAddForm() {

  function formHandler(event: FormEvent) {
    event.preventDefault();
    const target = event.target as HTMLFormElement;
    const fd = new FormData(target);
    const itemData = Object.fromEntries(fd.entries());
    
    target.reset();
  }

  return (
    <form
      className="w-full h-[75%] mt-4 p-4 flex flex-col justify-between"
      onSubmit={(event) => formHandler(event)}
    >
      <InputWrapper width="w-full" height='h-[40px]'>
        <PackageSearch />
        <Input type="text" placeholder="Name" name="name" required />
      </InputWrapper>
      <div className="w-full flex justify-between gap-4">
        <InputWrapper width="w-3/4" height='h-[40px]'>
          <Boxes />
          <Input
            type="number"
            placeholder="Quantity"
            variant="quantity"
            name="quantity"
            required
          />
        </InputWrapper>
        <InputWrapper width="w-auto" height='h-[40px]'>
          <OctagonAlert />
          <Input
            type="number"
            placeholder="Min Quantity"
            name="minQuantity"
            required
          />
        </InputWrapper>
      </div>
      <div className="w-full h-[70px] bg-white rounded-md flex justify-center items-center">
        <Image className="mx-2"/>
        <Input
          variant={"file"}
          type="file"
          accept="image/png, image/jpeg, image/jpg"
        />
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
      <InputWrapper width={"w-full"} height={'h-[100px]'}>
        <Text />
        <Input
          placeholder={"Description (optional)"}
          name="description"
        />
      </InputWrapper>
      <Button variant={"formSubmit"}>
        <PackagePlus className="mx-2" />
        Add Item
      </Button>
    </form>
  );
}
