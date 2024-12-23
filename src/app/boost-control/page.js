import Image from 'next/image'
import external_wg_setup from '@public/boost-control/bc-external.jpg'
import internal_wg_setup from '@public/boost-control/bc-internal.jpg'
import boost_solenoid_wiring from '@public/adc/OBD1.jpg'

export const metadata = {
  title: 'Boost Control',
  description: 'Covers how to install a 3-port boost control solenoid for use with your NismoTronicSA ECU.'
}

export default function BoostControl() {
  return (
    <div className='w-full gap-4 py-4 pl-7 pr-4 xl:pl-4'>
      <h1 className='w-full text-center text-4xl font-bold'>Boost Control</h1>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <p>This document explains how to install a 3-port boost control solenoid for use with your NismoTronicSA ECU.</p>
        <p>
          See EBC{' '}
          <a href='https://www.j-k-tuning.com/Help/TCSA_BOOST_CONTROL.html#ebcsetup' target='_blank' rel='noopener noreferrer'>
            Electronic Boost Control
          </a>{' '}
          SETUP for information on programming the boost control solenoid operation.
        </p>
        <p>This document is broken into two sections; External WG Setup and Internal WG Setup.</p>
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='w-full text-2xl font-bold'>External WG Setup</h2>
        <p>This section covers the installation of a 3-port boost control solenoid on an external WG.</p>
        <ul className='list-disc space-y-2 pl-6'>
          <li>Port 1 - Boost source from the intake manifold OR turbo is T&apos;d into the BOTTOM port of the WG</li>
          <li>Port 2 - Connect Directly to the TOP port of the WG</li>
          <li>Port 3 - OPEN FILTER</li>
        </ul>
        <Image className='w-full lg:w-3/4' src={external_wg_setup} alt='External WG Setup' />
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='w-full text-2xl font-bold'>Internal WG Setup</h2>
        <p>This section covers the installation of a 3-port boost control solenoid on an internal WG.</p>
        <ul className='list-disc space-y-2 pl-6'>
          <li>Port 1 - OPEN FILTER</li>
          <li>Port 2 - Directly to Internal WG nipple</li>
          <li>Port 3 - Boost Source from intake manifold or turbo</li>
        </ul>
        <Image className='w-full lg:w-3/4' src={internal_wg_setup} alt='Internal WG Setup' />
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='w-full text-2xl font-bold'>Boost Solenoid Wiring</h2>
        <p>Wiring the boost solenoid is very straightforward. There are two wires coming from the solenoid; 1 goes to a switched 12v power source, and the other goes to a PWM output from the ECU (which varies depending on which ECU you are using).</p>
        <p>
          If you are using an <span className='font-bold'>SR20DE, KA24DE or RWD SR20DET ECU</span>; then connect the PWM output wire to the stock AIV output on pin <span className='font-bold text-blue-500'>102</span>.
        </p>
        <p>
          If you are using a <span className='font-bold'>FWD SR20DET ECU (GTiR)</span>; then connect the PWM output wire to the stock WG solenoid output on pin <span className='font-bold text-blue-500'>111</span>.
        </p>
        <Image className='w-full lg:w-3/4' src={boost_solenoid_wiring} alt='Boost Solenoid Wiring' />
      </div>
    </div>
  )
}
