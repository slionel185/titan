import { router } from '@/server/trpc'
import { fetchAll } from '@/server/training/workouts/fetchAll'
import { fetchById } from '@/server/training/workouts/fetchById'

export const trainingRouter = router({
    workoutsFetchAll: fetchAll,
    workoutsFetchById: fetchById
})