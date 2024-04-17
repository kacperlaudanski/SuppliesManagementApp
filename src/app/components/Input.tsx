import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const inputStyles = cva([], {
  variants: {
    page: {},
  },
});

type Input = VariantProps<typeof inputStyles> & ComponentProps<"input">;

export default function Input({ page, ...props }: Input) {
  return <></>;
}
