import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";


const buttonStyle = cva(['transition-all duration-300 flex items-center'], {
    variants:{
       variant:{
        navbarExtended:["w-full h-[45px] bg-neutral-100 rounded-md text-sm px-4 justify-between"],
        navbarRolled:['w-full min-h-[55px] bg-neutral-100 rounded-md flex justify-center items-center']
       }
    }
})

type Button = VariantProps<typeof buttonStyle> & ComponentProps<"button">; 

export default function Button({variant, ...props}: Button){
    return (
      <button {...props} className={buttonStyle({variant})}>{props.children}</button>
    )
}