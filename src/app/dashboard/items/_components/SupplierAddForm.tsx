import Button from "@/app/components/Button";
import Input from "@/app/components/form/Input";
import InputWrapper from "@/app/components/form/InputWrapper";
import {
  Building2,
  Mail,
  MapPin,
  Phone,
  CalendarDays,
  Truck,
} from "lucide-react";
import { FormEvent } from "react";

export default function SupplierAddForm() {

  function formHandler(event: FormEvent) {
    event.preventDefault()
    const target = event.target as HTMLFormElement
    const fd = new FormData(target)
    const supplierData = Object.fromEntries(fd.entries())

    target.reset()
  }

  return (
    <form
      className="w-full h-[75%] mt-4 p-4 flex flex-col justify-between"
      onSubmit={(event) => formHandler(event)}
    >
      <InputWrapper width={`w-full`} height='h-[40px]'>
        <Building2 />
        <Input type="text" placeholder="Name" name="name" required/>
      </InputWrapper>
      <div className="flex gap-4">
        <InputWrapper width="w-1/2" height='h-[40px]'>
          <MapPin />
          <Input
            type="text"
            placeholder="Address"
            name="address"
            required
          />
        </InputWrapper>
        <InputWrapper width="w-1/2" height='h-[40px]'>
          <Mail />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </InputWrapper>
      </div>
      <div className="flex gap-4">
        <InputWrapper width="w-3/5" height='h-[40px]'>
          <Phone />
          <Input
            type="text"
            placeholder="Phone Number"
            name="phoneNumber"
            required
          />
        </InputWrapper>
        <InputWrapper width="w-2/5" height='h-[40px]'>
          <CalendarDays />
          <Input
            type="number"
            placeholder="Delivery Lead Time (days)"
            name="leadTime"
            required
          />
        </InputWrapper>
      </div>
      <Button variant="formSubmit">
        <Truck className="mx-2" />
        Add Supplier
      </Button>
    </form>
  );
}
