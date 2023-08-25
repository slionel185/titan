'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'

import { RegisterFormSchema, RegisterFormType } from '@/types/auth/RegisterForm'

import { trpc } from '@/utils/trpc'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel } from '@/components/ui/form'
import { Loader } from 'lucide-react'

export default function RegisterForm() {
    const { toast } = useToast()
    const postUser = trpc.auth.postUser.useMutation()
    const router = useRouter()
    const form = useForm<RegisterFormType>()

    function onSubmit(values: RegisterFormType) {
        postUser.mutate({
            ...values
        })
    }

    useEffect(() => {
        console.log(postUser.data)
        if(postUser.isLoading) return

        if(postUser.isError) toast({
            title: 'Error',
            description: 'Invalid data entry.'
        })
        if(postUser.data?.status === 201) router.push('/auth/login')
        if(postUser.data?.status === 400) toast({
            title: 'Error',
            description: postUser.data.message
        })
    }, [postUser])

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-2'>
                <FormField name='email' control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                            <Input className='w-full' placeholder='Email' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField name='username' control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                            <Input className='w-full' autoCapitalize='false' placeholder='Username' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField name='password' control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input className='w-full' type='password' placeholder='Password' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormField name='confirmPassword' control={form.control} render={({ field }) => (
                    <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                            <Input className='w-full' type='password' placeholder='Confirm Password' {...field} />
                        </FormControl>
                    </FormItem>
                )} />

                <FormDescription>Already have an account? <Link href={'/auth/login'} className='underline'>Login here!</Link></FormDescription>
            
                <Button className='w-full mt-4' type='submit'>{!postUser.isLoading? 'Register' : <Loader className='animate-spin' />}</Button>
            </form>
        </Form>
    )
}