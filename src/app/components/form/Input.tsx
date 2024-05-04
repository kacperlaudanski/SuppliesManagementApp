import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const inputStyles = cva(['w-full h-[40px] mx-2 outline-none'], {
  variants: {
    variant: {
      quantity:['w-3/4'], 
      file: ['h-auto text-neutral-400 bg-white'],
    },
  },
});

type Input = VariantProps<typeof inputStyles> & ComponentProps<"input">;

export default function Input({ variant, ...props }: Input) {
  return <>
      <input {...props} className={inputStyles({variant})}/> 
  </>;
}
