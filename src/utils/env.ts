import { z } from 'zod'
import { createEnv } from '@t3-oss/env-nextjs'

export const env = createEnv({
    client: {

    },
    server: {
        DATABASE_URL: z.string().min(1, { message: 'Database URL Required' }),

        NEXTAUTH__URL: z.string().url().min(1, { message: 'NextAuth URL Required' }),
        NEXTAUTH__SECRET: z.string().min(1, { message: 'NextAuth Secret Required' }),

        RESEND_API_KEY: z.string().min(1, { message : 'Resend API Key Required' })
    },
    experimental__runtimeEnv: process.env
})