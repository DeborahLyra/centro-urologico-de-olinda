import React from 'react';

export function VideoComponent() {
    return (
        <div className="bg-white py-8" id='aboutTheClinic'>
           <div className="max-w-2xl ml-8 mb-4">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Sobre a Clínica</h2>
        </div>
            <div className="flex justify-center items-center p-4">
                <iframe
                    className="w-full max-w-5xl h-64 md:h-96"
                    src="https://www.youtube.com/embed/8vSzJf8caAI"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
