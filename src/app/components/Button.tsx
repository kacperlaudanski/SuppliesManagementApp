import { cva, VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";

const buttonStyle = cva(['transition-all duration-300 flex items-center'], {
    variants:{
      status:{
        tabActive:['bg-[#ffc857]'], 
        tabInActive:['bg-neutral-100']
      }, 
      location:{
        nav: ['rounded-md text-sm px-4 hover:bg-[#ffc857]'],
        asideTab: ['flex'], 
        form:[]
      },
       variant:{
        navbarExtended:["w-full h-[45px] justify-between"],
        navbarRolled:['w-full min-h-[55px] justify-center items-center'],
        showAsideTab: [`w-[40px] h-[40px] bg-white justify-center items-center border-2 border-inherit border-solid absolute top-10 right-[-20px] rounded-full hover:bg-[#ffc857]`], 
        asideSupplierButton:['w-full h-[40px] rounded-md text-sm mt-2 hover:bg-[#ffc857]'], 
        asideActionButton:['w-full h-[40px] my-2 flex justify-center items-center rounded-md text-sm bg-neutral-200 hover:bg-[#ffc857]'], 
        formSubmit:['w-2/6 h-[45px] text-white bg-[#1f2041] hover:bg-[#ffc857] hover:text-black rounded-md flex items-center justify-center'],
        calculationModal: ['w-2/6 h-[40px] bg-[#1f2041] text-white center rounded-md hover:bg-[#ffc857] flex items-center justify-center hover:text-black']
       }
    }
})

type Button = VariantProps<typeof buttonStyle> & ComponentProps<"button">; 

export default function Button({status, location, variant, ...props}: Button){
    return (
      <button {...props} className={buttonStyle({status, location, variant})}>{props.children}</button>
    )
}