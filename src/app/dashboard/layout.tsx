import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'

export default function DashboardLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex flex-col h-[92vh]'>
                {children}
            </div>
            <Footer />
        </div>
    )
}