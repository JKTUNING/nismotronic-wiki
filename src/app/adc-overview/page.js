import Image from 'next/image'
import ADCv2_top from '@public/adc/ADCv2_top.jpg'
import ADCv2_jumper from '@public/adc/ADCv2_jumper.jpg'
import switched_ADCinput from '@public/adc/switched_ADCinput.png'
import ADCtop from '@public/adc/ADCtop.jpg'
import OBD1 from '@public/adc/OBD1.jpg'
import ADC_IAT_JUMPER from '@public/adc/ADC_IAT_JUMPER.jpg'
import MAP_INSTALL from '@public/adc/MAP_INSTALL.jpg'

export default function Home() {
  return (
    <div className='w-full gap-4 p-4'>
      <h1 className='w-full text-center text-4xl font-bold'>ADC Box Overview</h1>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='w-full text-2xl font-bold'>Top of ADC v2 board</h2>
        <ul className='list-disc pl-6'>
          <li>ADC0-ADC3 - Connect any 0-5 volt sensors (MAP, IAT, WBO2, Oil Pre, etc)</li>
          <li>FLEX - Connect output from GM Flex Fuel Sensor directly to this pin</li>
          <li>5Vout - 5v power source for MAP or IAT Installs</li>
          <li>GRD - Ground (chassis or ECU) when using the 12Vin and using the 5Vout</li>
          <li>12Vin - Supply pin with 12V which will be for reference power for the 5Vout</li>
        </ul>

        <Image className='w-3/4' src={ADCv2_top} alt='ADC v2 top' />
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='w-full text-2xl font-bold'>Bottom of ADC v2 board</h2>
        <ul className='list-disc pl-6'>
          <li>4 sets of solder pads in the bottom center of the board can be jumped for a 4.7k ohm pull up resistor for each ADC0-3 circuit. </li>
          <li className='font-bold'>Only use when needed (IAT installs are the most common use for this option)</li>
        </ul>
        <Image className='w-3/4' src={ADCv2_jumper} alt='ADC v2 jumper' />
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='w-full text-2xl font-bold'>Wiring MAP sensor to ADC input</h2>
        <p>A MAP sensor has 3 wires (GROUND, +5v source, and Signal).</p>
        <p>The best method of wiring the MAP sensor is to use the ADC box; this will generally produce the best results</p>
        <ul className='list-disc space-y-2 pl-6'>
          <li>12Vin - ECCS Relay Output (ECU pins 38 or 47) - Supplies the ADC box power.</li>
          <li>GND - ECU Ground (pins 39 or 48) - Grounds the ADC box circuit.</li>
          <li>5Vout - MAP SENSOR 5v SOURCE - Supplies MAP sensors it&apos;s own dedicated 5v supply.</li>
          <li>ADC - INPUT from MAP SENSOR SIGNAL - Receives signal from MAP.</li>
          <li>GND - Additional ground terminal to be used to ground the map sensor.</li>
        </ul>
        <Image className='w-3/4' src={MAP_INSTALL} alt='MAP install' />
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='w-full text-2xl font-bold'>Wiring IAT sensor to ADC input</h2>

        <p>The IAT sensor is a vital part of any speed density conversion so we tried to make it easier for you guys to install.</p>

        <p>The IAT sensor has two wires (polarity does not matter) that need to be ran to the ADC box on most B13 SR20 and S13 KA24 setups. These the ECUs do not support the EGR Temp input like the SR20DET ECUs do.</p>

        <ol className='list-decimal space-y-2 pl-6'>
          <li>Wire ADC 12v input to ECU power source (pin 38)</li>
          <li>Wire ADC Ground input to ECU ground source (pin 39)</li>

          <Image className='w-3/4' src={OBD1} alt='OBD1' />
          <li>Flip over ADC box and make sure to solder two solder pads together on the corresponding ADC input you would like to use for the IAT input.</li>

          <Image className='w-3/4' src={ADC_IAT_JUMPER} alt='ADC IAT Jumper' />

          <li>Connect 1 wire from IAT sensor to the ADC (0-3) input pin that corresponds to the jumper you just soldered together.</li>
          <li>Connect remaining wire from IAT sensor to ADC Ground pin</li>

          <li>To enable the sensor in the calibration go to SETUP -`&gt;` Sensors -`&gt;` IAT</li>

          <li className='pb-4 font-bold'>Also make sure you select the correct calibration for the sensor, you can do this by right clicking on the voltage vs temperature table and selecting the ADC input option.</li>

          <a className='text-blue-500' href='https://www.j-k-tuning.com/Help/TCSA_SETUP.html#iatsensor'>
            IAT Setup
          </a>
        </ol>
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='w-full text-2xl font-bold'>Wiring a wideband to an ADC input.</h2>

        <p>The ADC inputs can handle any 0-5 volt wideband output signal.</p>

        <p>Find your wideband&apos;s 0-5 volt output wire and connect it directly to any of the ADC 0-3 inputs on the breakout board.</p>

        <Image className='w-3/4' src={ADCtop} alt='ADC top' />

        <p>Then select the wideband in the drop down list and enable it in the software.</p>

        <a className='text-blue-500' href='https://www.j-k-tuning.com/Help/TCSA_SETUP.html#wideband'>
          Wideband Setup
        </a>
      </div>
      <div className='m-10 mx-auto flex max-w-screen-lg flex-col gap-4 rounded-md border border-gray-300 p-4 shadow-lg shadow-primary/20'>
        <h2 className='w-full text-2xl font-bold'>Wiring a switch to an ADC input.</h2>
        <ul className='list-disc pl-6'>
          <li>2 prong switch (clutch switch/cruise switch or toggle)</li>
          <li>1k ohm 1/8 watt resistor</li>
          <li>1 fA Diode</li>
        </ul>
        The diode is required if the switch is already wired to a 12V source, such as the E-brake warning light switch. The 5V going to the 10k ohm resistor is from the 5V output in the breakout box.
        <p>Vdc0 = 5 volt output from the ADC box.</p>
        <Image className='w-3/4' src={switched_ADCinput} alt='switched ADC input' />
      </div>
    </div>
  )
}
