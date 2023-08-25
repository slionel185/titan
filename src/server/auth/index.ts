import { router } from '@/server/trpc'
import { postUser } from '@/server/auth/postUser'

export const authRouter = router({
    postUser: postUser
})