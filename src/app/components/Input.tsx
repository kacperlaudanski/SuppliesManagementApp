import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const inputStyles = cva([], {
  variants: {
    variant: {
      itemAddForm: ['w-full h-[40px]'], 
    },
  },
});

type Input = VariantProps<typeof inputStyles> & ComponentProps<"input">;

export default function Input({ variant, ...props }: Input) {
  return <>
      <input {...props} className={inputStyles({variant})}/> 
  </>;
}
