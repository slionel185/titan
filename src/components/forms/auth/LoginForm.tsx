'use client'

import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { LoginFormSchema, LoginFormType } from '@/types/auth/LoginForm'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'

export default function LoginForm() {

    // @ts-expect-error ZodResolver not resolving.
    const form = useForm<LoginFormType>({ resolver: zodResolver(LoginFormSchema) })

    function onSubmit(values: LoginFormType) {
        signIn('Titan-Credentials', values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-2'>
                <FormField name='username' control={form.control} render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input className='w-full' autoCapitalize='false' placeholder='Username' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField name='password' control={form.control} render={({ field }) => (
                    <FormItem className='w-full'>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input className='w-full' type='password' placeholder='Password' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormDescription>New here? <Link href={'/auth/register'} className='underline'>Register here!</Link></FormDescription>
            
                <Button className='w-full mt-4' type='submit'>Login</Button>
            </form>
        </Form>
    )
}