import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const inputStyles = cva(['outline-none'], {
  variants: {
    variant: {
      name: ['h-[40px] mx-2 flex-grow '], 
      quantity:['w-3/4 h-[40px] mx-2 flex-grow'], 
      minQuantity: ['h-[40px] mx-2 flex-grow rounded-md'],
      file: ['text-neutral-400 bg-white'],
      suppliers: ['w-full h-[40px] mx-2 ']
    },
  },
});

type Input = VariantProps<typeof inputStyles> & ComponentProps<"input">;

export default function Input({ variant, ...props }: Input) {
  return <>
      <input {...props} className={inputStyles({variant})}/> 
  </>;
}
