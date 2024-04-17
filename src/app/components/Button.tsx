import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";


const buttonStyle = cva(['transition-all duration-300 flex items-center'], {
    variants:{
       variant:{
        navbarExtended:["w-full h-[85%] bg-neutral-100 rounded-md text-sm px-4 justify-between"],
        navbarRolled:['w-full bg-neutral-100 rounded-md justify-center']
       }
    }
})

type Button = VariantProps<typeof buttonStyle> & ComponentProps<"button">; 

export default function Button({variant, ...props}: Button){
    return (
      <button {...props} className={buttonStyle({variant})}>{props.children}</button>
    )
}