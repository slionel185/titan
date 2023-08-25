import { router } from '@/server/trpc'
import { authRouter } from '@/server/auth/index'
import { emailRouter } from '@/server/email/index'

export const appRouter = router({
    auth: authRouter,
    email: emailRouter
})

export type AppRouter = typeof appRouter