import { router } from '@/server/trpc'
import { authRouter } from '@/server/auth'
import { emailRouter } from '@/server/email'
import { trainingRouter } from '@/server/training'

export const appRouter = router({
    auth: authRouter,
    email: emailRouter,
    training: trainingRouter
})

export type AppRouter = typeof appRouter