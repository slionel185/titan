import { Resend } from 'resend'

import { env } from '@/utils/env'

const globalForPrisma = globalThis as unknown as {
    email: Resend | undefined
}

export const email = globalForPrisma.email ?? new Resend(env.RESEND_API_KEY)

if (process.env.NODE_ENV !== 'production') globalForPrisma.email = email