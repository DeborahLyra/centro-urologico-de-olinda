import React from 'react'
import exame1 from '/public/imgs/exame-1.png'
import exame2 from '/public/imgs/exame-2.png'

const mainProcedures = [
    {
        name: 'Cirurgia 1',
        description: '..............................',
        imageSrc: exame1,
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Cirurgia 2',
        description: '............................',
        imageSrc: exame2,
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
]

const callouts = [
    {
        name: 'Cirurgia 1',
        description: '..............................',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Cirurgia 2',
        description: '............................',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
]

export function AboutTheClinic() {
    return (

        <div className="bg-gray-100 py-24 sm:py-32 ">
            <h2 className="text-3xl font-bold tracking-tight ml-6 text-primary sm:text-4xl mb-4">Exames</h2>

            {/* exames principais */}
            <div className="mt-6 space-y-6">
                {mainProcedures.map((procedure, index) => (
                    <div key={procedure.name} className={`group relative flex my-4 items-center justify-evenly flex-col md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                        <div className="relative h-80 w-fit overflow-hidden sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64 sm:mb-2">
                            <img
                                alt={procedure.imageAlt}
                                src={procedure.imageSrc}
                                className="h-full  w-80 object-cover object-center lg:w-96"
                            />
                        </div>
                        <div>
                            <h3 className="mt-6 text-sm text-gray-500">{procedure.name}</h3>
                            <p className="text-base font-semibold text-gray-900">{procedure.description}</p>
                        </div>
                    </div>
                ))}
            </div>



            {/* outros exames */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-primary text-center">Mais Especialidades da Equipe</h2>

                    <div className="mt-6 lg:grid lg:grid-cols-2 lg:gap-x-2 lg:space-y-0 space-y-6">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative mx-auto">
                                <div className="relative h-64 w-64 overflow-hidden mx-auto">
                                    <img
                                        alt={callout.imageAlt}
                                        src={callout.imageSrc}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-500 text-center">{callout.name}</h3>
                                <p className="text-base font-semibold text-gray-900 text-center">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>

    )
}
