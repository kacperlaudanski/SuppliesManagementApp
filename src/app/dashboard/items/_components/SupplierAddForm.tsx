import Button from "@/app/components/Button";
import Input from "@/app/components/form/Input";
import InputWrapper from "@/app/components/form/InputWrapper";
import { Building2, Mail, MapPin, Phone, CalendarDays } from "lucide-react";
import { FormEvent } from "react";

export default function SupplierAddForm() {
  function formHandler(event: FormEvent) {event.preventDefault()}

  return (
    <form
      className="w-full h-[75%] mt-4 p-4 flex flex-col justify-between"
      onSubmit={(event) => formHandler(event)}
    >
      <InputWrapper width="w-full">
        <Building2 />
        <Input type="text" placeholder="Name" variant="name" />
      </InputWrapper>
      <div className="flex gap-4">
        <InputWrapper width="w-1/2">
          <MapPin />
          <Input type="text" placeholder="Address" variant="suppliers" />
        </InputWrapper>
        <InputWrapper width="w-1/2">
          <Mail />
          <Input type="email" placeholder="Email" variant="suppliers" />
        </InputWrapper>
      </div>
      <div className="flex gap-4">
        <InputWrapper width="w-3/5">
          <Phone />
          <Input type="text" placeholder="Phone Number" variant="suppliers" />
        </InputWrapper>
        <InputWrapper width="w-2/5">
          <CalendarDays />
          <Input
            type="number"
            placeholder="Delivery Lead Time (days)"
            variant="suppliers"
          />
        </InputWrapper>
      </div>
      <Button variant="formSubmit">ADD SUPPLIER</Button>
    </form>
  );
}
