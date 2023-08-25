'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

export default function NavigationButton({ to, size, children }: any) {
    const router = useRouter()

    return (
        <Button onClick={() => router.push(to)} variant={'ghost'} size={size} >{children}</Button>
    )
}