import type { NextAuthOptions } from 'next-auth'

import bcrypt from 'bcrypt'
import CredentialsProvider from 'next-auth/providers/credentials'

import { prisma } from '@/utils/prisma'

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/auth/login'
    },
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user }
        },
        async session({ session, token }) {
            return {
                ...session,
                user: token
            }
        }
    },
    providers: [
        CredentialsProvider({
            id: 'Titan-Credentials',
            name: 'Titan-Credentials',
            credentials: {
                username: { type: 'text' },
                password: { type: 'password' }
            },
            async authorize(credentials, req) {
                console.log(credentials)
                if(!credentials || !credentials.username || !credentials.password) return null

                const user = await prisma.user.findFirst({ where: { username: credentials.username }})
                if(!user) return null

                const match = await bcrypt.compare(credentials.password, user.password)

                console.log(user, match)
                if(user && match) return user
                return null
            },
        })
    ]
}