import React from 'react'
import Image from 'next/image'
import sa_compare from '@public/software-basics/SA-COMPARE-NEW.jpg'
import sa_diff from '@public/software-basics/SA-COMPARE-DIFF.jpg'
const CompareTool = () => {
  return (
    <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
      <h2 className='text-xl font-bold'>TCD Compare Tool</h2>
      <p>
        The TCD Compare Tool is a handy software feature that allows you to compare, import and examine the differences between two TCDs. This makes it quick and easy to spot the changes to the major tables and gives the user the ability to import the compared TCD's table into their current TCD's
        table.
      </p>
      <h3 className='text-lg font-bold'>How It Works</h3>
      <p>Open up your current TCD and then navigate to Tools -&gt; Compare TCD. This will open up a dialog window where you can then select and open a TCD that you would like to compare.</p>
      <p>After you click "open", a window will pop up that shows you the following:</p>
      <ul className='list-disc pl-6'>
        <li>ITEM - the table or parameter that is different between the compare and current TCD.</li>
        <li>#Diff - the number of differences in the table or parameter between the compare and current TCD.</li>
        <li>Show Comp - Will show you the compared values for the ITEM row you have selected.</li>
        <li>Show Diff - Will show you the difference between the compare and current values for the ITEM row you have selected.</li>
      </ul>
      <Image src={sa_compare} alt='TCD Compare Tool' />
      <h3 className='text-lg font-bold'>Compare Table Option</h3>
      <p>You also have the ability to toggle the compare ON/OFF right on the ITEM you are viewing. Simply right click on any ITEM and select the "Compare" box in the list OR you can select the "Show Comp" check box on the Compare TCD window for the ITEM you would like to compare.</p>
      <p>
        All of the items that are different between the Compare and Current TCDs will show up <span className='font-bold text-red-500'>RED</span>.
      </p>
      <h3 className='text-lg font-bold'>Show Difference Option</h3>
      <p>The show difference option allows the user to display the difference between the Current and Compare TCDs right on the ITEM table.</p>
      <p>The "Injetor Battery Offset" table (below) is showing the difference between the Current and Compare TCDs.</p>
      <p>
        The "Injector Close Timing" table (below) is showing the comparison BUT you can also see the cells that are different between your Compare and Current TCDs which are shown in <span className='font-bold text-red-500'>RED</span>.
      </p>
      <Image src={sa_diff} alt='Show Difference' />

      <h3 className='text-lg font-bold'>Import</h3>
      <p>
        The <span className='font-bold text-blue-500'>Import Item</span> button allows you to directly import the selected ITEM from the Compare TCD into the Current TCD.
      </p>
      <p>If there is a table or parameter you would like to pull in from the Compare TCD, simply use the Import Item button to speed up the process!</p>
    </div>
  )
}

export default CompareTool
