'use client'

import { useSession } from 'next-auth/react'

import { trpc } from '@/utils/trpc'
import { columns } from '@/app/dashboard/training/workouts/Columns'
import { DataTable } from '@/app/dashboard/training/workouts/DataTable'


export default function WorkoutPage() {
    const session = useSession()
    const data = trpc.training.workoutsFetchAll.useQuery({ id: session.data?.user.id })

    return (
        <div className='h-full w-full flex flex-col justify-center items-center'>
            <div className='flex flex-col w-full h-full lg:p-12'>
                {data.data && <DataTable columns={columns} data={data.data} />}
            </div>
        </div>
    )
}