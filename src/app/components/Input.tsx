import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const inputStyles = cva([], {
  variants: {
    page: {
      loginForm: ["px-4 w-full border-2 py-2 rounded-md text-sm outline-none"],
    },
  },
});

type Input = VariantProps<typeof inputStyles> & ComponentProps<"input">;

export default function Input({ page, ...props }: Input) {
  return (
    <div className="mt-5">
      <label className="block text-md mb-2" htmlFor={props.name}>
        {props.name}
      </label>
      <input {...props} className={inputStyles({ page })} />
    </div>
  );
}
