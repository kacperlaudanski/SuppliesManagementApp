'use client'
import { useEffect, useRef, useState } from "react"

interface ItemAddForm {
  openModal: boolean
  onCloseModal: () => void
}

export default function ItemsAddForm({openModal, onCloseModal}: ItemAddForm) {

  const ref = useRef<HTMLDialogElement>(null); 
  const [isModalOpen, setModalOpen] = useState(false)

 /* useEffect(() => {
    if(openModal) return ref.current?.showModal(); 
    if(!openModal) return ref.current?.close(); 
  }, [openModal])*/

  return (
    <dialog onClose={onCloseModal} ref={ref}>
      
    </dialog>
  )
}

