import React from 'react'
import image from '/public/imgs/footer-img.jpeg'
import logo from '/public/imgs/logo-centro-urologico-olinda.png'
import { Envelope, FacebookLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react'

export function Footer() {
  return (
    <footer>
        <img src={image} alt="" className='h-40 w-full bg-cover bg-bottom' />
        <div className='bg-darkBlue h-24'>
            <div className=' w-full h-full flex p-4 items-center justify-between'>
                <img src={logo} alt="" className='h-10'/>
                
                <div className='flex items-center gap-8'>
                    <a href=""><WhatsappLogo size={32}/></a>
                    <a href=""><InstagramLogo size={32}/></a>
                    <a href=""><FacebookLogo size={32}/></a>
                    <a href=""><Envelope size={32}/></a>
                </div>
            </div>

        </div>
    </footer>
  )
}
