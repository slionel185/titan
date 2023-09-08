'use client'

import { Calendar, Dumbbell, Gauge, Menu, Salad, UserPlus, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function NavSheet() {
    return (
        <div className='flex flex-1 justify-start items-center sm:hidden gap-4'>
            <Sheet>
                <SheetTrigger asChild>
                    <Button size={'icon'} variant={'outline'}><Menu /></Button>
                </SheetTrigger>
                <SheetContent side={'top'}>
                    <SheetHeader>
                        <SheetTitle className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase'>Titan</SheetTitle>
                    </SheetHeader>
                    <div className='flex flex-col gap-4 pt-6'>
                        <Button asChild variant={'outline'}>
                            <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                <div className='flex text-sm w-full font-medium leading-none'>
                                    <Gauge className='mr-2 h-4 w-4' />
                                    Dashboard
                                </div>
                            </a>
                        </Button>

                        <Button asChild variant={'outline'}>
                            <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                <div className='flex text-sm w-full font-medium leading-none'>
                                    <Calendar className='mr-2 h-4 w-4' />
                                    Calendar
                                </div>
                            </a>
                        </Button>
                        <Accordion type='single' collapsible className='w-full border-none'>
                            <AccordionItem value='sales' className='w-full border-none'>
                                <AccordionTrigger>Sales</AccordionTrigger>
                                <AccordionContent>
                                    <div className='flex flex-col gap-4'>
                                        <Button asChild variant={'outline'}>
                                            <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                <div className='flex text-sm w-full font-medium leading-none'>
                                                    <UserPlus className='mr-2 h-4 w-4' />
                                                    Prospects
                                                </div>
                                            </a>
                                        </Button>

                                        <Button asChild variant={'outline'}>
                                            <a href='/dashboard' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                <div className='flex text-sm w-full font-medium leading-none'>
                                                    <Users className='mr-2 h-4 w-4' />
                                                    Members
                                                </div>
                                            </a>
                                        </Button>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='training' className='w-full border-none'>
                                <AccordionTrigger>Training</AccordionTrigger>
                                <AccordionContent>
                                    <div className='flex flex-col gap-4'>
                                        <Button asChild variant={'outline'}>
                                            <a href='/dashboard/training/prospects' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                <div className='flex text-sm w-full font-medium leading-none'>
                                                    <UserPlus className='mr-2 h-4 w-4' />
                                                    Prospects
                                                </div>
                                            </a>
                                        </Button>

                                        <Button asChild variant={'outline'}>
                                            <a href='/dashboard/training/clients' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                <div className='flex text-sm w-full font-medium leading-none'>
                                                    <Users className='mr-2 h-4 w-4' />
                                                    Clients
                                                </div>
                                            </a>
                                        </Button>

                                        <Button asChild variant={'outline'}>
                                            <a href='/dashboard/training/workouts' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                <div className='flex text-sm w-full font-medium leading-none'>
                                                    <Dumbbell className='mr-2 h-4 w-4' />
                                                    Workout Plans
                                                </div>
                                            </a>
                                        </Button>

                                        <Button asChild variant={'outline'}>
                                            <a href='/dashboard/training/meals' className='block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'>
                                                <div className='flex text-sm w-full font-medium leading-none'>
                                                    <Salad className='mr-2 h-4 w-4' />
                                                    Meal Plans
                                                </div>
                                            </a>
                                        </Button>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </SheetContent>
            </Sheet>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl uppercase text-left'>Titan</h1>
        </div>
    )
}