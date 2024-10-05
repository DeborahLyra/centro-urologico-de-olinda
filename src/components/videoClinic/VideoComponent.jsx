import React from 'react';

import poster from '/public//imgs/posterVideo.png'

export function VideoComponent() {
    return (
        <div className="bg-white py-8" id='aboutTheClinic'>
            <div className="max-w-2xl ml-8 mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Sobre a Clínica</h2>
            </div>
            <div className='px-6 flex items-center justify-around flex-col'>
                <div className='text-black text-center text-xl font-semibold'>
                    <p >O Centro Urológico de Olinda, pioneiro em urologia na cidade, conta com uma equipe de médicos renomados. Oferecemos aos nossos pacientes o que há de mais moderno em tecnologia, aliado a um atendimento humanizado e acolhedor."</p>
                </div>
                <div className="flex justify-center items-center p-4">
                    <video
                        className="w-full max-w-2xl h-64 md:h-96 mt-4"
                        controls
                        poster={poster} 
                        src="/imgs/video.mov"
                        type="video/mp4"
                    >
                        Seu navegador não suporta a tag de vídeo.
                    </video>
                </div>
            </div>
        </div>
    );
}
