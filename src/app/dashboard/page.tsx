'use client'

import { useSession } from 'next-auth/react'
import { useEffect } from 'react'

export default function DashboardPage() {
    const session = useSession()
   
    useEffect(() => {
        console.log(session.data)
    }, [session.status])

    return (
        <div className='flex h-full flex-col'>
        </div>
    )
}