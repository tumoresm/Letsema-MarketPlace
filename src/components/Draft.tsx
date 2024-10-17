"use client"

import { PenSquare } from "lucide-react"
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import Image from "next/image"
import Link from "next/link"

const Draft = ()=> {

    const itemCount = 0

    const cost = 0

    return (
    <Sheet>
        <SheetTrigger className="group -m-2 flex items-center p-2">
            <PenSquare aria-hidden="true" 
            className="h-6 w-6 flex-shrink-6 text-gray-400 group-hover:text-gray-500"
            />
            <span className="ml-2 text-sm font-medium tex-gray-700 group-hover:text-gray-800">
                0
            </span>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
          <SheetHeader className="space-y-2.5 pr-6">
            <SheetTitle>Draft(0)</SheetTitle>
          </SheetHeader>
          {itemCount > 0 ? (
            <>
              <div className="flex w-full flex-col pr-6">
                {/* TODO draft logic */}
                Drafted tenders
              </div>
              <div className="space-y-4 pr-6">
                <Separator/>
                <div className="space-y-1.5 text-sm">
                    <div className="flex">
                        <span className="flex-1">Tender ID</span>
                        <span>Free</span>
                    </div>
                    <div className="flex">
                        <span className="flex-1">Estimated Amount</span>
                        <span>{formatPrice(cost)}</span>
                    </div>
                    <div className='flex'>
                  <span className='flex-1'>Total</span>
                  <span>Grand Total
                  </span>
                </div>
                </div>

                <SheetFooter>
                  <SheetTrigger asChild>
                    <Link
                    href='/draft' className={buttonVariants({
                      className: 'w-full',
                    })}>
                      See More
                    </Link>
                  </SheetTrigger>
                </SheetFooter>                
              </div>
            </>
          ): (
            <div className='flex h-full flex-col items-center justify-center space-y-1'>
              <div aria-hidden='true' 
                className='relative mb-4 h-60 w-60 text-muted-foreground'>
                <Image 
                  src='/empty-tender-box.png' 
                  fill 
                  alt='empty Tender box'/>
              </div>
              <div className="text-xl font-semibold">
                You have No drafts
                </div>
            <SheetTrigger asChild>
              <Link href="/Tenders" className={buttonVariants({
                variant: 'link',
                size: 'sm',
                className: 'text-sm text-muted-foreground',
              })}>
                Add drafts to your tender-box to submit
              </Link>
            </SheetTrigger>
            </div>
          )}
        </SheetContent>
    </Sheet>
    )
}

export default Draft