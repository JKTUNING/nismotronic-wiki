import Image from 'next/image'
import sa_load from '@public/sd/sa_load.jpg'
import sa_map from '@public/sd/sa_map.jpg'
import sa_iat from '@public/sd/sa_iat.jpg'
import sa_mafdisable from '@public/sd/sa_mafdisable.jpg'
import sa_overboost from '@public/sd/sa_overboost.jpg'

export const metadata = {
  title: 'Speed Density Conversion',
  description: 'NismoTronic gives the user the ability to run the car is Speed Density mode, which uses a MAP and IAT sensor in place of the normal MAF sensor.'
}

export default function SpeedDensity() {
  return (
    <div className='w-full gap-4 py-4 pl-7 pr-4 xl:pl-4'>
      <h1 className='w-full text-center text-4xl font-bold'>Speed Density Conversion</h1>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <p>NismoTronic gives the user the ability to run the car is Speed Density mode, which uses a MAP and IAT sensor in place of the normal MAF sensor.</p>
        <p>Speed Density tuning and table setup is quite different than setting a car up for use with a MAF sensor, below we will list some of the changes that will be needed when converting over to a speed density setup.</p>
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='w-full text-2xl font-bold'>MAP Sensor</h2>
        <p>MAP (manifold pressure) sensors are sold in various different sizes and it is essential to choose a sensor that will suite the amount of manifold pressure that your setup will see.</p>
        <p>If the car will be naturally aspirated, then pretty much any factory or aftermarket MAP sensor will work. We suggest using either the factory Honda 1.75 bar OR GM 3bar map sensor for these applications.</p>
        <p>If the car will be turbocharged, then you will need to select a MAP sensor that accounts for **MORE THAN** the maximum boost pressure you want to run.</p>
        <p>Below is a table of some of the most common MAP sensors and their relative psi at max boost pressure.</p>
        <table className='w-full table-auto md:w-1/2'>
          <thead>
            <tr>
              <th className='px-4 text-left'>MAP SENSOR</th>
              <th className='px-4 text-center'>BAR</th>
              <th className='px-4 text-center'>Relative psi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='px-4 text-left'>Factory Honda</td>
              <td className='px-4 text-center'>1.75</td>
              <td className='px-4 text-center'>~ 10.5</td>
            </tr>
            <tr>
              <td className='px-4 text-left'>GM/OMNI 3bar</td>
              <td className='px-4 text-center'>3</td>
              <td className='px-4 text-center'>~ 29</td>
            </tr>
            <tr>
              <td className='px-4 text-left'>AEM 3.5bar</td>
              <td className='px-4 text-center'>3.5</td>
              <td className='px-4 text-center'>~ 36</td>
            </tr>
            <tr>
              <td className='px-4 text-left'>OMNI 4bar</td>
              <td className='px-4 text-center'>4</td>
              <td className='px-4 text-center'>~ 43</td>
            </tr>
            <tr>
              <td className='px-4 text-left'>AEM 5bar</td>
              <td className='px-4 text-center'>5</td>
              <td className='px-4 text-center'>~ 58</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='w-full text-2xl font-bold'>IAT Sensor</h2>
        <p>
          The IAT (intake air temperature) sensor is the next most important sensor when converting to speed density. Without this sensor the ECU cannot make adjustments to the fueling and ignition when the weather changes. This is a very important sensor to have on the car if you will be driving it
          in different weather conditions!
        </p>
        <p>
          NismoTronic offers two preset IAT calibration tables which are calibrated around the GM open element IAT sensor. If you are using the EGT temp input then you can use the table that is supplied in the start-up calibration. If you are using an ADC input then you should right click on the IAT
          calibration table and select the ADC setup from the preset.
        </p>
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='w-full text-2xl font-bold'>Calibration Setup</h2>
        <p>Setting up a calibration to be used for Speed Density operation is a little different than the normal setup for a MAF calibration.</p>
        <ol className='list-decimal space-y-2 pl-6'>
          <li>Select your load source</li>
          <Image className='w-full sm:w-3/4 lg:w-2/3' src={sa_load} alt='Select your load source' />
          <li>Select and Enable your MAP sensor</li>
          <Image className='w-full sm:w-3/4 lg:w-2/3' src={sa_map} alt='Select and Enable your MAP sensor' />
          <li>Select and Enable your IAT sensor</li>
          <Image className='w-full sm:w-3/4 lg:w-2/3' src={sa_iat} alt='Select and Enable your IAT sensor' />
          <li>
            <span className='font-bold'>DISABLE THE MAF SENSOR</span>
          </li>
          <Image className='w-full sm:w-3/4 lg:w-2/3' src={sa_mafdisable} alt='Disable the MAF sensor' />
          <li>
            Setup overboost tables (<span className='font-bold'>even if naturally aspirated</span>)
          </li>
          <Image className='w-full sm:w-3/4 lg:w-2/3' src={sa_overboost} alt='Setup overboost tables' />
        </ol>
      </div>
    </div>
  )
}
