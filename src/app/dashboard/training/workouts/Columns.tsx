'use client'

import type { User, WorkoutPlan } from '@prisma/client'

import { useRouter } from 'next/navigation'
import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown, MoreHorizontal } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export const columns: ColumnDef<WorkoutPlan>[] = [
    {
        id: 'select',
        header: ({ table }) => (
            <Checkbox checked={table.getIsAllPageRowsSelected()} onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)} aria-label='Select all' />
        ),
        cell: ({ row }) => (
            <Checkbox checked={row.getIsSelected()} onCheckedChange={(value) => row.toggleSelected(!!value)} aria-label='Select row' />
        ),
        enableSorting: false,
        enableHiding: false
    },
    {
        accessorKey: 'name',
        header: ({ column }) => {
            return (
                <Button variant={'ghost'} onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const router = useRouter()
            const data = row.original

            return <h1 onClick={() => router.push(`/dashboard/training/workouts/${data.id}`)} className='font-medium hover:underline cursor-pointer'>{row.getValue('name')}</h1>
        }
    },
    {
        accessorKey: 'target',
        header: () => <div>Target</div>,
        cell: ({ row }) => {
            const targets: string[] = row.getValue('target')
            const formatted = targets.join(', ')
            
            return <div className='font-medium'>{formatted}</div>
        }
    },
    {
        accessorKey: 'assigned',
        header: 'Assigned To',
        cell: ({ row }) => {
            const users: User[] = row.getValue('assigned')
            let total = users.length - 3
            if(total < 0) total = 0
            const avatars = users.slice(0, 3)

            return (
                <div className='flex gap-2 justify-start items-center'>
                    <div className='flex gap-[-5px] -mr-4'>
                        <Avatar className='shadow border border-background z-30'>
                            <AvatarImage />
                            <AvatarFallback>{avatars[0].username.split('')[0].toUpperCase()}</AvatarFallback>
                        </Avatar>
                        {avatars.length > 1 && <Avatar className='shadow border border-background z-20 -translate-x-2'>
                            <AvatarImage />
                            <AvatarFallback>{avatars[1].username.split('')[0].toUpperCase()}</AvatarFallback>
                        </Avatar>}
                        {avatars.length > 2 && <Avatar className='shadow border border-background z-10 -translate-x-4'>
                            <AvatarImage />
                            <AvatarFallback>{avatars[2].username.split('')[0].toUpperCase()}</AvatarFallback>
                        </Avatar>}
                    </div>
                    {total > 0 && <h1>+ {total} more</h1>}
                </div>
            )
        }
    },
    {
        id: 'actions',
        enableHiding: false,
        cell: ({ row }) => {
            const workout = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'ghost'} className='h-8 w-8 p-0'>
                            <span className='sr-only'>Open menu</span>
                            <MoreHorizontal className='h-4 w-4' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(workout.id)}>
                            Copy Workout ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />

                        <DropdownMenuItem>View Workout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]