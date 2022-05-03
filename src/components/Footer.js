import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='footer bg-white'>
        <div className="footer_content p-8 flex items-center justify-center w-full">
            <div className="footer_title">
                <h2 className='text-3xl text-color1 font-bold'>SMART<span className='text-black font-normal'>SHOP</span></h2>   
            </div>
            <div className="footer_info">
                <ul className='flex items-center justify-between'>
                    <li className='text-black font-bold mx-5'>Terminos y condiciones</li>
                    <li className='text-black font-bold mx-5'>Atencion al cliente</li>
                    <li className='text-black font-bold mx-5'>Garantias</li>
                </ul>
            </div>
            <div className="footer_social w-1/4">
                <ul className='flex items-center justify-between'>
                    <li className='text-black font-bold'><FontAwesomeIcon className='text-color1 mr-1.5' icon={faInstagram}/>Instagram</li>
                    <li className='text-black font-bold'><FontAwesomeIcon className='text-color1 mr-1.5' icon={faFacebook}/>Facebook</li>
                    <li className='text-black font-bold'><FontAwesomeIcon className='text-color1 mr-1.5' icon={faLinkedin}/>Linkedin</li>
                    <li className='text-black font-bold'><FontAwesomeIcon className='text-color1 mr-1.5' icon={faWhatsapp}/>WhatsApp</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer