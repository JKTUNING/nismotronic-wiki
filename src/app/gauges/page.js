import Image from 'next/image'
import GaugeMenu from '@public/gauges/GaugeMenu.jpg'
import AddGauge from '@public/gauges/AddGauge.jpg'
import GaugeOptions from '@public/gauges/GaugeOptions.jpg'
import DefineGauge from '@public/gauges/DefineGauge.jpg'

export const metadata = {
  title: 'Gauges',
  description: 'Covers how to use the Gauge screen, how to add and remove gauges, how to define gauge layouts, and how to resize gauges.'
}

export default function Gauges() {
  return (
    <div className='w-full gap-4 py-4 pl-7 pr-4 xl:pl-4'>
      <h1 className='text-center text-4xl font-bold'>Gauges</h1>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Accessing the Gauge screen</h2>
        <p>
          The Gauge screen can be accessed by going to <b>Logging -&gt; Gauges</b> or by simply pressing <b>Ctrl+F</b>.
        </p>
        <Image className='w-3/4 lg:w-1/2' src={GaugeMenu} alt='Gauge Menu' />
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Adding a Gauge to a layout</h2>
        <p>Right click -&gt; Add your desired Gauge type</p>
        <Image className='w-3/4 lg:w-1/2' src={AddGauge} alt='Add Gauge' />

        <p>Load Layout -&gt; Deletes current layout and loads a saved layout.</p>
        <p>Save Layout -&gt; Saves your current layout as a NGL template file</p>
        <p>Lock Layout -&gt; Locks the Gauges so they cannot be moved or resized</p>
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Selecting Log Item</h2>
        <p>Right click -&gt; Select Data Item you would like to display on the current Gauge</p>
        <Image className='w-3/4 lg:w-1/2' src={GaugeOptions} alt='Selecting Log Item' />
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Define Gauge Layout</h2>
        <p>Right click -&gt; Define Gauges</p>
        <Image className='w-3/4 lg:w-1/2' src={DefineGauge} alt='Define Gauge Layout' />
        <p>
          <span className='font-bold'>Min value</span> - The starting point for the gauge (lowest reading).
        </p>
        <p>
          <span className='font-bold'>Max value</span> - This is the highest value for the needle and bar gauges
        </p>
        <p>
          <span className='font-bold'>Gauge Step</span> - This is the step between major ticks on needle and bar gauges.
        </p>
        <p>
          <span className='font-bold'>Background</span> - Changes the color of the gauge background
        </p>
        <p>
          <span className='font-bold'>Warn Color</span> - Above the max value the gauge text will change to this color.
        </p>
        <p>
          <span className='font-bold'>Hi-Contrst</span> - Will change the default colors to a higher contrast for easier viewing
        </p>
        <p>
          <span className='font-bold'>Indicatr Color</span> - Changes the color of the indicator light
        </p>
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Gauge Resizing</h2>
        <p>
          Shift+UP arrow or Shift+RIGHT arrow will <span className='font-bold'>expand</span> the gauge size.
        </p>
        <p>
          Shift+DOWN arrow or Shift+LEFT arrow will <span className='font-bold'>shrink</span> the gauge size.
        </p>
      </div>
    </div>
  )
}
