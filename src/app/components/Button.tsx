import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";


const buttonStyle = cva(['transition-all duration-300 flex items-center'], {
    variants:{
      status:{
        tabActive:['bg-[#ffc857]']
      }, 
      location:{
        navButton: ['bg-neutral-100 rounded-md text-sm px-4 hover:bg-[#ffc857]']
      },
       variant:{
        navbarExtended:["w-full h-[45px] justify-between"],
        navbarRolled:['w-full min-h-[55px] justify-center items-center']
       }
    }
})

type Button = VariantProps<typeof buttonStyle> & ComponentProps<"button">; 

export default function Button({status, location, variant, ...props}: Button){
    return (
      <button {...props} className={buttonStyle({status, location, variant})}>{props.children}</button>
    )
}