import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "ZAR",
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
){
  const{currency = 'ZAR', notation = 'compact'} = options

  const numericPrice = typeof price == "string"? parseFloat(price) : price

  return new Intl.NumberFormat("en-SA",{
    style: "currency",
    currency,
    notation,
    maximumSignificantDigits: 2,
  }).format(numericPrice)
}