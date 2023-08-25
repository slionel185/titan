'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { LogOut, SunMoon, Sun, Moon } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem } from '@/components/ui/dropdown-menu'

export default function NavAvatarMenu() {
    const { data } = useSession()
    const { theme, setTheme } = useTheme()

    const [themeChange, onThemeChange] = useState(theme)

    useEffect(() => {
        setTheme(themeChange!)
    }, [themeChange])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Avatar className='border cursor-pointer'>
                    <AvatarImage src={data?.user?.image || ''} />
                    <AvatarFallback>{data?.user?.username.split('')[0].toUpperCase()}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-44'>
                <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <SunMoon className="mr-2 h-4 w-4" />
                        <span>Theme</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            <DropdownMenuRadioGroup value={theme} onValueChange={onThemeChange}>
                                <DropdownMenuRadioItem value='light'>
                                    <Sun className='mr-2 h-4 w-4' />
                                    <span>Light</span>
                                </DropdownMenuRadioItem>

                                <DropdownMenuRadioItem value='dark'>
                                    <Moon className='mr-2 h-4 w-4' />
                                    <span>Dark</span>
                                </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>

                <DropdownMenuItem onClick={() => signOut()}>
                    <LogOut className='mr-2 h-4 w-4' />
                    <span>Logout</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}