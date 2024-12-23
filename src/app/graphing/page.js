import Image from 'next/image'
import GraphingNEW from '@public/graphing/GraphingNEW.jpg'
import Graphing2 from '@public/graphing/Graphing2.jpg'
import Zoom1 from '@public/graphing/Zoom1.jpg'
import Zoom2 from '@public/graphing/Zoom2.jpg'

export default function Graphing() {
  return (
    <div className='w-full gap-4 p-4'>
      <h1 className='text-center text-4xl font-bold'>Graphing</h1>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Log Analyzer</h2>
        <p>The Log Analyzer window is the main window for log review.</p>
        <p>You can add multiple graphs to the layout and click and drag through the graph to update your review data for map tracing, data window and gauges.</p>
        <p>It also supports zooming in on sections of the graph to increase the resolution in the area you would like to review. You can then un-zoom to restore the graph to it&apos;s original state.</p>
        <Image className='w-3/4' src={GraphingNEW} alt='Log Analyzer' />
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Add Graph</h2>
        <p>Right click on the Log Analyzer window and select Add New Graph.</p>
        <h2 className='text-xl font-bold'>Remove Graph</h2>
        <p>Right click -&gt; Remove Graph will remove the selected graph from the layout.</p>
        <h2 className='text-xl font-bold'>Define Graph Template</h2>
        <p>Right click -&gt; Define Graph Template will open the Graph Template window.</p>
        <Image className='w-3/4' src={Graphing2} alt='Graph Template' />
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Zoom</h2>
        <p>
          To select the section of the graph you would like to zoom in on, hold <span className='font-bold'>Shift and Click-Drag</span> across the section you wish to zoom in on.
        </p>
        <Image className='w-3/4' src={Zoom1} alt='Zoom' />
        <p>
          Then hold <span className='font-bold'>Shift</span> and press the <span className='font-bold'>+</span> key to zoom in.
        </p>
        <Image className='w-3/4' src={Zoom2} alt='Zoom' />
        <p>
          To un-zoom back to the original graph hold <span className='font-bold'>Shift</span> and press the <span className='font-bold'>-</span> key.
        </p>
      </div>
    </div>
  )
}
