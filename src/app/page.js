import Link from 'next/link'
import { Calendar, Inbox, Gauge, ChartArea, Atom, Video, Fan } from 'lucide-react'

export default function HomePage() {
  return (
    <div className='w-full gap-4 p-4'>
      <h1 className='text-center text-4xl font-bold'>NismoTronic Wiki</h1>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 p-4'>
        <p>Welcome to the NismoTronic Wiki!</p>
        <p>
          Here you will find helpful information about the{' '}
          <Link className='text-blue-500' href='https://nismotronic.com/' target='_blank' rel='noopener noreferrer'>
            NismoTronicSA Software
          </Link>
          .
        </p>
        <p>
          For more information about the software, please visit the{' '}
          <Link className='text-blue-500' href='https://www.j-k-tuning.com/Help/Index.html' target='_blank' rel='noopener noreferrer'>
            NismoTronicSA Software Support
          </Link>{' '}
          page.
        </p>
        <div className='flex flex-wrap justify-evenly gap-10 rounded-md border border-gray-300 p-10 shadow-lg shadow-primary/20'>
          <a className='flex w-1/3 flex-col items-center justify-center rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20' href='/software-basics'>
            <Inbox className='h-10 w-10' />
            <p className='text-center'>Software Basics</p>
          </a>
          <a className='flex w-1/3 flex-col items-center justify-center rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20' href='/adc-overview'>
            <Calendar className='h-10 w-10' />
            <p className='text-center'>ADC Overview</p>
          </a>
          <a className='flex w-1/3 flex-col items-center justify-center rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20' href='/gauges'>
            <Gauge className='h-10 w-10' />
            <p className='text-center'>Gauges</p>
          </a>
          <a className='flex w-1/3 flex-col items-center justify-center rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20' href='/graphing'>
            <ChartArea className='h-10 w-10' />
            <p className='text-center'>Graphing</p>
          </a>
          <a className='flex w-1/3 flex-col items-center justify-center rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20' href='/speed-density'>
            <Atom className='h-10 w-10' />
            <p className='text-center'>Speed Density</p>
          </a>
          <a className='flex w-1/3 flex-col items-center justify-center rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20' href='/boost-control'>
            <Fan className='h-10 w-10' />
            <p className='text-center'>Boost Control</p>
          </a>
          <a className='flex w-1/3 flex-col items-center justify-center rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20' href='/demos'>
            <Video className='h-10 w-10' />
            <p className='text-center'>Demos</p>
          </a>
        </div>
      </div>
    </div>
  )
}
