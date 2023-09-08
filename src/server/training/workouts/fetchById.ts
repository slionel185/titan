import { z } from 'zod'

import { prisma } from '@/utils/prisma'
import { procedure } from '@/server/trpc'

export const fetchById = procedure
    .input(
        z.object({
            id: z.string().uuid()
        })
    ).query(async (opts) => {
        const id = opts.input.id

        const workout = await prisma.workoutPlan.findUnique({
            where: {
                id
            },
            include: {
                exercises: {
                    include: {
                        sets: true
                    }
                },
                assigned: true
            }
        })

        if(workout) return workout
        return { error: true }
    })