"use client"

import { TENDER_CATEGORIES } from "@/config"
import { useOnClickOutside } from "@/hooks/outside-onclick"
import { useEffect, useRef, useState } from "react"
import NavItem from "./NavItem"

const NavItems = ()=>{
     const [activeIndex, setActiveIndex]= useState<null | number>(null)
     const isAnyOpen = activeIndex !== null

     useEffect(() => {
        const handler = (e: KeyboardEvent)=>{
            if(e.key==="Escape") {
                setActiveIndex(null)
            }

        }
        document.addEventListener("keydown", handler)

        return () => {
            document.removeEventListener("keydown", handler)
        }
     }, [])

     const isOpen = activeIndex !== null

     const navRef = useRef<HTMLDivElement | null>(null)

     useOnClickOutside(navRef, ()=> setActiveIndex(null))

    return <div className="flex gap-4 h-full" ref={navRef}>
        {TENDER_CATEGORIES.map((category, i) =>{

            const handleOpen = () => {
                if(activeIndex === i) {
                    setActiveIndex(null)
                } else {
                    setActiveIndex(i)
                }
            }
            const close = ()=> setActiveIndex(null)

            const isOpen = i === activeIndex

            return (
                <NavItem 
                category={category} 
                handleOpen={handleOpen} 
                isOpen={isOpen} 
                isAnyOpen={isAnyOpen}
                />
            )
        })}
    </div>
}
export default NavItems