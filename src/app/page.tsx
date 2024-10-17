import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { CloudCog, Cog, HeartHandshake, Microscope, Scale, Shrink } from "lucide-react";
import Link from "next/link";
import { Children } from "react";

const features = [
  {
    name: "Cloud Based",
    Icon: CloudCog,
    description: 'Get benefit of streamlined and well defined procurement processes ensuring efficient decision making, focused-vision, reduced-cost for paperwork, enhanced engagement, proactive vetting, compliance and standardized'
  },
  {
    // name: "Convergence",
    name: "Enhanced Engagement",
    Icon: Shrink,
    description: 'Experience enhanced engagement with the local business community. LetsemaMarketplace creates platform for schools and small businesses to connect with each other, inturn building sense of community and encourage more people to support local businesses.'
  },
  {
    name: "Fair Deal",
    Icon: Scale,
    description: 'LetsemaMarketplace ensures that all products sold on the platform are priced fairly. This ensures that small businesses are not being taken advantage of and that schools are getting a good deal.'
  },
  {
    name: "Quality control",
    Icon: Microscope,
    description: 'Schools test quality of the products the receive and submit proof of quality test. This ensures that schools are getting high-quality products and that small businesses are producing products of a good standard. '
  },
  {
    name: "Dispute Resolution",
    Icon: HeartHandshake,
    description: 'To ensure efficiency dispute resolution process is made part of agreement to handle any issues that may arise between schools and small businesses. This will help to ensure that any issues are resolved fairly and quickly.'
  }
]
  
export default function Home() {
  return (
  <>
   <MaxWidthWrapper>
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-2xl font-bold tracking-tight text-grey-900 sm:text-6xl">
        Centralised supply chain management system for all public and non-government {''}
        <span className='text-blue-600'>schools</span>.
      </h1>
      <p className="mt-6 text-lg max-w-prose text-muted-foreground">
        Welcome to Letsema Marketplace. A Platform designed to reverse auction school procurements/tenders to potential suppliers.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 mt-6'>
        <Link href='/tenders'className={buttonVariants()}>Browse Popular</Link>
        <Button variant='ghost'>Our quality promise &rarr;</Button>
      </div>
    </div>

    {/* {TODO: List tenders} */}
   </MaxWidthWrapper>

   <section className="border-t border-gray-200 bg-gray-50">
    <MaxWidthWrapper className="py-20">
      <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
       {features.map((feature)=>
       (
        <div key={feature.name} className="text-center md:flex md:items-start md:text-left lg:text-center">
          <div className="md:flex-shrink-0 flex justify-center">
            <div className="h-16 w-16 flex items-center  justify-center rounded-full bg-blue-100 text-blue-900">
              {<feature.Icon className="w-1/3 h-1/3"/>}
            </div>
          </div>

          <div className="mt-6 md:m1-4 md:mt-0 lg:ml-0 lg:mt-6">
            <h3 className="text-base font-medium text-ray-900">
              {feature.name}
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">
              {feature.description}
            </p>
          </div>
        </div>
       )
       )}
      </div>

    </MaxWidthWrapper>

   </section>
   </>
 )
}
