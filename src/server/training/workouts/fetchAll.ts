import { z } from 'zod'

import { prisma } from '@/utils/prisma'
import { procedure } from '@/server/trpc'

export const fetchAll = procedure
    .input(z.object({
        id: z.string().nullish()
    }))
    .query(async (opts) => {
        if(!opts.input.id) return []

        const user = await prisma.user.findFirst({
            where: {
                id: opts.input.id
            },
            include: {
                workout_plans: {
                    include: {
                        assigned: true
                    }
                }
            }
        })

        if(user) return user.workout_plans
        return []
    })