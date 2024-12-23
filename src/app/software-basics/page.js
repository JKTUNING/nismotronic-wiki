import CompareTool from './components/CompareTool'

export const metadata = {
  title: 'Software Basics',
  description: 'Covers the basics of the software, including quick keys, working with the MAF window, loading a TCD, working with the primary maps, working with the parameter tables, logging settings, and misc settings.'
}

export default function SoftwareBasics() {
  return (
    <div className='w-full gap-4 py-4 pl-7 pr-4 xl:pl-4'>
      <h1 className='w-full text-center text-4xl font-bold'>Software Basics</h1>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Quick Keys</h2>
        <ul className='list-disc pl-6'>
          <li>Ctrl + O - Open File</li>
          <li>Ctrl + S - Saves current file</li>
          <li>Ctrl + U - Uploads current changes to emulator (when connected)</li>
          <li>Ctrl + L - Clears lambda table when on the Fuel/Ign screen.</li>
          <li>Ctrl + D - Opens the Data bar screen</li>
          <li>Ctrl + F - Opens the Live Gauges screen</li>
          <li>Ctrl + G - Opens the Graph Review screen</li>
          <li>Ctrl + M - Opens the Monitor screen</li>
        </ul>
        <h2 className='text-xl font-bold'>Working with the MAF window:</h2>
        <h3 className='text-lg font-bold'>Click-Drag to highlight cells.</h3>
        <ul className='list-disc pl-6'>
          <li>Minus Key - will decrease value by 10 units</li>
          <li>Plus Key - will increase value by 10 units</li>
          <li>Shift + minus key - will decrease value by 50 units</li>
          <li>Shift + plus key - will increase value by 50 units</li>
        </ul>
        <h3 className='text-lg font-bold'>Right Click Direct Edit Method</h3>
        <ul className='list-disc pl-6'>
          <li>Set cell to desired value and hit Enter/Return to confirm change</li>
          <li>Tab moves the editable cell down</li>
          <li>Shift+Tab moves the editable cell up</li>
        </ul>
        <h3 className='text-lg font-bold'>MAF Selection</h3>
        <ul className='list-disc pl-6'>
          <li>Maf Selection drop down window populated by the MAF DATA file in the NismoTronic Root Directory</li>
          <li>Save your custom MAF by hitting Save MAF and name it to suite! It will be saved into the MAF DATA file and will be populated into your MAF drop down menu next time you open.</li>
          <li>Delete MAF allows you to delete any of your Cusom Mafs in the drop down window, but WILL NOT delete the supplied STOCK MAF items.</li>
        </ul>
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Loading a TCD</h2>
        <p>There are two ways to Load a TCD into the software for editing</p>
        <ul className='list-disc pl-6'>
          <li>File -&gt; Open : The traditional open method</li>
          <li>File -&gt; Open Recent : Shows a list of your 10 previously opened files</li>
          <li>You can also have the software load the last opened bin automatically, by selecting &quot;Load Last Open Bin&quot; in the settings window.</li>
        </ul>
        <h2 className='text-xl font-bold'>Saving a TCD</h2>
        <p>To Save the TCD you have open, simply go to File -&gt; Save.</p>
        <h2 className='text-xl font-bold'>Saving a TCD as a new file</h2>
        <p>To Save the TCD to a new file, go to File -&gt; Save As.</p>
        <h2 className='text-xl font-bold'>Importing a TCD from the NEMU</h2>
        <p>To Import the tune data from the NEMU into a TCD file.</p>
        <ul className='list-disc pl-6'>
          <li>Open a TCD from the startup calibration folder that matches your ECU type.</li>
          <li>Connect to the NEMU and when prompted that the calibration does not match, simply select IMPORT FROM NEMU.</li>
          <li>Go to File -&gt; Save As and save the downloaded content to a new file</li>
        </ul>
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Working with the primary maps:</h2>
        <p>Quick Keys</p>
        <ul className='list-disc pl-6'>
          <li>The Minus Key &quot;-&quot; : Will decrease the current value by 1</li>
          <li>The Plus Key &quot;+&quot; : Will Increase the current value by 1</li>
          <li>Control + &quot;J&quot; : Will Bring up a Selection Adjustment Window</li>
          <li>Percent Change</li>
          <li>Add/Sub Change</li>
          <li>Set Value</li>
        </ul>
        <p>Viewing</p>
        <ul className='list-disc pl-6'>
          <li>Data: This will show the Fuel/Ign table in a table view</li>
          <li>Graph: Will show a 2d/3d graphical view of Fuel/Ign tables</li>
          <li>Using the Arrow Keys on the Data table will sift you around on the Table/Graph.</li>
        </ul>
        <p>Right Click</p>
        <ul className='list-disc pl-6'>
          <li>INCREASE SELECTION - Will increase current values by 1</li>
          <li>DECREASE SELECTION - Will decrease current values by 1</li>
          <li>SELECTION ADJUSTMENT - Will bring up the Selection Adjustment window</li>
          <li>IMPORT FROM TCD - Imports current table values AND scalars from the selected TCD file</li>
          <li>COPY MAP FROM - Imports table values from selected map into the current table</li>
          <li>COPY RPM SCALES - Copies table RPM SCALES from selected map into the current table</li>
          <li>COPY LOAD SCALES - Copies table LOAD SCALES from selected map into the current table</li>
          <li>VIEW GRAPH - Displays the current table in 2d/3d graph form</li>
          <li>FUEL UNITS - Allows user to change units from RAW to MSEC (SD FUEL MAP ONLY!!)</li>
          <li>OPTIMIZE SD FUEL MAPS - Allows user to &quot;Optimize&quot; the SD FUEL MAPS to gain more resolution</li>
          <li>HELP - Opens current table&apos;s help item</li>
        </ul>
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Working with the parameter tables:</h2>
        <p>QUICK KEYS</p>
        <ul className='list-disc pl-6'>
          <li>Each table supports manual input and will be stored with the “Enter/Return” keys.</li>
          <li>The Minus Key &quot;-&quot; : Will decrease the current value by 1</li>
          <li>The Plus Key &quot;+&quot; : Will Increase the current value by 1</li>
          <li>Control + &quot;J&quot; : Will Bring up a Selection Adjustment window</li>
          <li>Percent Change</li>
          <li>Add/Sub Change</li>
          <li>Set Value</li>
        </ul>
        <p>RIGHT CLICK</p>
        <ul className='list-disc pl-6'>
          <li>SELECTION ADJUSTMENT - Will bring up Selection Adjustment window</li>
          <li>VIEW RAW TABLE VALUES - This will display the RAW values for the table</li>
          <li>IMPORT - Imports current table from selected TCD into your current TCD</li>
          <li>VIEW GRAPH - Displays current table in 2d/3d format</li>
          <li>HELP - Opens current table&apos;s help item</li>
        </ul>
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Logging Settings</h2>
        <ul className='list-disc pl-6'>
          <li>Recording Triggers - The software will only record the current log values IF ALL of the current log values are greater or equal to the values entered here.</li>
          <li>Packet timeout counter is for diagnostic purposes</li>
          <li>Direct Wideband Settings</li>
          <li>Direct wideband logging is the most accurate form of collecting data from a wideband controller but is not a permanent connection as it can only be logged when your laptop is in the car</li>
          <li>Supported Direct Wideband Types</li>
          <li>Innovate Products (LC1,LM1/LM2, MTX-L)</li>
          <li>SLC PurePlus</li>
        </ul>
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='text-xl font-bold'>Misc Settings</h2>
        <ul className='list-disc pl-6'>
          <li>Row/Col Highlights - Will highlight the index of the row/column that is currently selected on the main fuel and ignition tables</li>
          <li>Log Playback Speed - This option changes the playback speed of the log when in log review mode.</li>
          <li>Upload Tone - You can select your desired confirmation tone that is played after a succesful upload to the NEMU. This can be enabled/disabled by the checkbox</li>
          <li>Graph Layout - Allows the graph to be displayed in either 2d or 3d mode. If the table is 2d it will display in 2d mode even if 3d is selected.</li>
        </ul>
      </div>
      <CompareTool />
    </div>
  )
}
