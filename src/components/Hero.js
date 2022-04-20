import React from 'react'
import heroBg from '../../public/img/hero_img.png';

export const Hero = () => {
  return (
    <div className='hero_bg flex justify-between items-center font-bold'>
        <div className='hero_content w-2/5 h-auto flex flex-col items-start justify-between text-white'>
            <h2 className='text-5xl'>Conoce la nueva Aorus Z690</h2>
            <ul className='hero_ul text-2xl'>
                <li>Support 12th Gen Intel® Series Processors</li>
                <li>Dual Channel Non-ECC Unbuffered DDR5, 4 DIMMs</li>
                <li>Direct 20+1+2 Phases VRM Design with 105A Power Stage* and Tantalum Polymer Capacitor</li>
                <li>DDR5 XTREME MEMORY Design with SMD DIMM and Shielded Memory Routing</li>
                <li>Thermal Reactive Armor with NanoCarbon Fins-Array III Heatsink, Direct-Touch Heatpipe II and NanoCarbon Baseplate</li>    
            </ul>
            <a className='hero_btn_info' href='#'>Mas informacion</a>
        </div> 
        <div>
            <img src={heroBg}/>
        </div>
    </div>
    
  )
}
