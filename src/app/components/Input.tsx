import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import ShowPasswordIcon from "./icons/ShowPasswordIcon";

const inputStyles = cva([], {
  variants: {
    page: {
      loginForm: ["px-4 w-full border-2 py-2 rounded-md text-sm outline-none"],
      registerForm: [
        "mt-2 p-2 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm text-gray-900",
      ],
    },
  },
});

type Input = VariantProps<typeof inputStyles> & ComponentProps<"input">;

export default function Input({ page, ...props }: Input) {
  return (
    <div className="flex flex-col mt-5 relative">
      <label className="text-md mb-2" htmlFor={props.id}>
        {props.name}
      </label>
      <input {...props} className={inputStyles({ page })} />
      {props.type === "password" && (
        <button
          type="button"
          className="absolute bottom-2.5 right-2 bg-transparent flex items-center justify-center text-gray-700"
        ><ShowPasswordIcon /></button>
      )}
    </div>
  );
}
