import React from 'react'
import image from '/public/imgs/footer-img.jpeg'
import logo from '/public/imgs/logo-centro-urologico-olinda.png'
import { FacebookLogo, InstagramLogo, Phone, WhatsappLogo } from 'phosphor-react'

export function Footer() {
  return (
    <footer>
        <img src={image} alt="" className='h-40 w-full bg-cover bg-bottom' />
        <div className='bg-darkBlue h-24'>
            <div className=' w-full h-full flex p-4 items-center justify-between'>
                <img src={logo} alt="" className='h-10'/>
                
                <div className='flex items-center gap-8'>
                    <a href="https://w.app/MBEeqt" target='_blank'><WhatsappLogo size={32}/></a>
                    <a href="https://www.instagram.com/centrourologicodeolinda/" target='_blank'><InstagramLogo size={32}/></a>
                    <a href="https://www.facebook.com/p/Centro-Urol%C3%B3gico-de-Olinda-100063573667494/" target='_blank'><FacebookLogo size={32}/></a>
                    <a href="tel:(81)9.8946-2406"><Phone size={32}/></a>
                </div>
            </div>

        </div>
    </footer>
  )
}
