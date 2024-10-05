import React from 'react';

export function VideoComponent() {
    return (
        <div className="bg-white py-8" id='aboutTheClinic'>
            <div className="max-w-2xl ml-8 mb-8">
                <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Sobre a Clínica</h2>
            </div>
            <div className='px-6 flex items-center justify-around flex-col'>
                <div className='text-black text-xl font-semibold'>
                    <p >Com mais de 20 anos de experiência, somos uma clínica de referência em urologia na cidade de Olinda.</p>
                </div>
                <div className="flex justify-center items-center p-4">
                    <video
                        className="w-full max-w-2xl h-64 md:h-96 mt-4"
                        controls
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
