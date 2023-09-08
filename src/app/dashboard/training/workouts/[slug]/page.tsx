'use client'

import { trpc } from '@/utils/trpc'

export default function WorkoutById({ params }: { params: { slug: string }}) {
    const workoutId = params.slug

    const workout = trpc.training.workoutsFetchById.useQuery({ id: workoutId })

    return (
        <div className='flex flex-col justify-center items-center'>
            {workout.data && <h1>{JSON.stringify(workout.data)}</h1>}
        </div>
    )
}