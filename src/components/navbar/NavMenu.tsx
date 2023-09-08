'use client'

import Link from 'next/link'

import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, navigationMenuTriggerStyle, NavigationMenuTrigger, NavigationMenuContent } from '@/components/ui/navigation-menu'

export default function NavMenu() {
    return (
        <div className='hidden sm:flex flex-1 items-center'>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href={'/dashboard'} passHref legacyBehavior>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Dashboard
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href={'/dashboard'} passHref legacyBehavior>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Calendar
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Sales</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='flex flex-col gap-2 p-3 w-[400px]'>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                            <div className='text-sm font-medium leading-none'>Prospects</div>
                                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>Search potential members.</p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>

                                <li>
                                    <NavigationMenuLink asChild>
                                        <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                            <div className='text-sm font-medium leading-none'>Members</div>
                                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>Search existing members.</p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Training</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='flex flex-col gap-2 p-3 w-[400px]'>
                                <li>
                                    <NavigationMenuLink asChild>
                                        <a href='/dashboard/training/prospects' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                            <div className='text-sm font-medium leading-none'>Prospects</div>
                                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>Search potential clients.</p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>

                                <li>
                                    <NavigationMenuLink asChild>
                                        <a href='/dashboard/training/clients' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                            <div className='text-sm font-medium leading-none'>Clients</div>
                                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>Search existing clients.</p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>

                                <li>
                                    <NavigationMenuLink asChild>
                                        <a href='/dashboard/training/workouts' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                            <div className='text-sm font-medium leading-none'>Workout Plans</div>
                                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>Create and edit your workout plans.</p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>

                                <li>
                                    <NavigationMenuLink asChild>
                                        <a href='/dashboard/training/meals' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                            <div className='text-sm font-medium leading-none'>Meal Plans</div>
                                            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>Create and edit your meal plans.</p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )        
}