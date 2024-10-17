export const TENDER_CATEGORIES = [
    {
        label: "Quotations",
        value: "quotations" as const,
        featured: [
            {
                name: "Popular",
                href: "#",
                imageSrc: "/nav/quotes/popular_q.jpg",
            },
            {
                name: "New",
                href: "#",
                imageSrc: "/nav/quotes/new_q.jpg"
            },
            {
                name: "Local",
                href: "#",
                imageSrc: "/nav/quotes/local_q.jpg"
            }
        ]
    },
    {
        label: "Proposals",
        value: "proposals" as const,
        featured: [
            {
                name: "Popular",
                href: "#",
                imageSrc: "/nav/proposals/popular_pp.jpg",
            },
            {
                name: "New",
                href: "#",
                imageSrc: "/nav/proposals/new_pp.jpg"
            },
            {
                name: "Local",
                href: "#",
                imageSrc: "/nav/proposals/local_pp.jpg"
            }
        ]
    },
    {
        label: "Social Responsibility",
        value: "fresh_producesocial_responsibility" as const,
        featured: [
            {
                name: "Popular",
                href: "#",
                imageSrc: "/nav/socialpr/popular_sr.jpg",
            },
            {
                name: "New",
                href: "#",
                imageSrc: "/nav/socialpr/new_sr.jpg"
            },
            {
                name: "Local",
                href: "#",
                imageSrc: "/nav/socialpr/local_sr.jpg"
            }
        ]
    }
]