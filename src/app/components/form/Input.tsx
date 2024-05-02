import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const inputStyles = cva([], {
  variants: {
    variant: {
      name: ['h-[40px] mx-2 flex-grow outline-none'], 
      quantity:['w-3/4 h-[40px] mx-2 flex-grow outline-none'], 
      minQuantity: ['h-[40px] mx-2 flex-grow outline-none rounded-md']

    },
  },
});

type Input = VariantProps<typeof inputStyles> & ComponentProps<"input">;

export default function Input({ variant, ...props }: Input) {
  return <>
      <input {...props} className={inputStyles({variant})}/> 
  </>;
}
