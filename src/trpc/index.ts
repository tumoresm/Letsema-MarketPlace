import { publicProcedure, router } from "./trpc";

export const appRouter = router({
    anyApiRoute: publicProcedure.query(() => {
        return 'Dumela Koena'
    }),
    
})

export type AppRouter = typeof appRouter