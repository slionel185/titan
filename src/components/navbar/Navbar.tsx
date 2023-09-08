import NavMenu from '@/components/navbar/NavMenu'
import NavSheet from '@/components/navbar/NavSheet'
import NavAvatarMenu from '@/components/navbar/NavAvatarMenu'

export default function Navbar() {
    return (
        <div className='flex h-[10vh] max-h-[90px] justify-center items-center border-b px-6'>
            <div className='flex h-full w-full justify-center items-center gap-4'>
                <NavSheet />
                <div className='hidden sm:flex flex-col'>
                    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>TITAN</h1>
                </div>
                <NavMenu />
                <div className='flex gap-4 items-center'>
                    <NavAvatarMenu />
                </div>
            </div>
        </div>
    )
}