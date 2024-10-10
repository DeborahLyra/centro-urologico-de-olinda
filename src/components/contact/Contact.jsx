import { MapPinLine, Phone, WhatsappLogo } from 'phosphor-react'
import React from 'react'

export function Contact() {
    return (
        <div className="bg-white py-8 sm:py-10 " id='contact'>
            <h2 className="text-3xl font-bold tracking-tight ml-16 text-primary sm:text-4xl mb-4">Contato</h2>
            <div className='bg-primary p-8'>
                <h2 className="text-3xl md:text-4xllg:text-4xl font-bold tracking-tight ml-4 md:ml-16 lg:ml-16 text-white sm:text-4xl mb-4">Agende Sua Consulta</h2>

                <div className='bg-lightBlue rounded-lg p-4 lg:mx-32'>
                    <h4 className='text-primary font-bold mb-4'>Centro Urológico de Olinda</h4>
                    <div>
                        <div className='flex items-center text-black font-semibold mb-4'>
                            <div className='bg-primary p-1 rounded-full mr-2'><a href="https://maps.app.goo.gl/Mp6oYtBhU6JR4Cxr8" target='_blank'><MapPinLine size={28} style={{color: 'white'}}/></a></div>
                            <p>Av. Dr. José Augusto Moreira, 900, sala 1011, Casa Caiada, Olinda-PE</p>
                        </div>
                        <div className='flex items-center text-black font-semibold mb-4'>
                            <div className='bg-primary p-1 rounded-full mr-2'><a href="https://wa.me/5581989462406?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta" target='_blank'><WhatsappLogo size={28} style={{color: 'white'}}/></a></div>
                            <p>Entre em contato pelo nosso WhatsApp</p>
                        </div>
                        <div className='flex items-center text-black font-semibold '>
                            <div className='bg-primary p-1 rounded-full mr-2'><a href="tel:(81)9.8946-2406"><Phone size={28} style={{ color: 'white' }} /></a></div>
                            <div className='lg:flex lg:items-center lg:gap-2 md:flex md:items-center md:gap-2'>
                                <p>Telefone para contato: </p>
                                <p> <a href="tel:(81)9.8946-2406">(81)9.8946-2406</a> | <a href="tel:(81)9.8491-3020">(81)9.8491-3020</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
