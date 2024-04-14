import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";


const buttonStyle = cva([], {
    variants:{
       variant:{
        navbarExtended:["w-full h-[40px] bg-neutral-100 rounded-md text-sm"],
        navbarRolled:[]
       }
    }
})

type Button = VariantProps<typeof buttonStyle> & ComponentProps<"button">; 

export default function Button({variant, ...props}: Button){
    return (
      <button {...props} className={buttonStyle({variant})}>{props.children}</button>
    )
}