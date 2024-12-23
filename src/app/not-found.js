import Link from 'next/link'
import { Home } from 'lucide-react'

export const metadata = {
  title: 'NismoTronic Wiki - Not Found',
  description: 'NismoTronic Wiki - Not Found'
}

export default function NotFound() {
  return (
    <div className='h-[calc(100vh-100px)] w-full bg-background'>
      <div className='flex h-full w-full flex-col items-center justify-center'>
        <div className='flex flex-col items-center justify-center gap-2 p-2'>
          <h2 className='text-contentText text-2xl font-bold'>Not Found</h2>
          <p className='text-contentText'>Could not find requested resource</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-2 p-2'>
          <Link href='/'>
            <Home className='h-10 w-10' />
          </Link>
        </div>
      </div>
    </div>
  )
}
