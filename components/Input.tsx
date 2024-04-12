import { cva } from "class-variance-authority"
import type { VariantProps } from "class-variance-authority"
import { ComponentProps } from "react"
import {twMerge} from 'tailwind-merge'

const inputStyles = cva([], {
    variants:{
       page:{
         loginForm: ['w-5/6 h-full rounded-md px-2'], 
       }
    }
})

type Input = VariantProps<typeof inputStyles> & ComponentProps<'input'>; 

export default function Input({page, ...props}: Input){
    return (
        <div className="w-full h-8 rounded-md">
         <input {...props} className={twMerge(inputStyles({page}))} /> 
        </div>
    )
}