import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import { authOptions } from '@/utils/auth'
import ContactModal from '@/components/modals/ContactModal'
import NavigationButton from '@/components/buttons/NavigationButton'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

export default async function HomePage() {
    const session = await getServerSession(authOptions)

    if(session) redirect('/dashboard')

    return (
        <div className='h-screen flex flex-col justify-center items-center px-4'>
            <Card className='w-full px:4 border-none sm:border-solid max-w-xl relative shadow'>
                <div className='absolute top-4 right-4'>
                    <NavigationButton to='/auth/login'>Login</NavigationButton>
                </div>
                <CardHeader>
                    <CardTitle className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>TITAN</CardTitle>
                    <CardDescription>Customer Relationship Manager</CardDescription>
                </CardHeader>
                <CardContent className='flex flex-col gap-4'>
                    <p>Welcome to Titan! Our CRM software is the best in the business and will help you stay organized and connected with your customers. Our easy-to-use interface and powerful features will help you get the most out of your customer relationships. Thanks for choosing Titan!</p>
                </CardContent>
                <CardFooter>
                    <div className='w-full flex justify-end gap-4'>
                        <ContactModal />
                    </div>
                </CardFooter>
            </Card>
        </div>
    )
}