'use client'

import { Search } from "lucide-react"

export default function SearchBox() {
  return (
    <div className="w-full h-[80px] flex justify-around mb-6 items-center text-neutral-400 border-b-2">
      <Search /> 
      <input type='search' placeholder="Search..." className="w-9/12 h-[45px] outline-none"/>
    </div>
  )
}
