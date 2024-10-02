import React from 'react'
import exame1 from '/public/imgs/exame-1.jpeg'
import exame2 from '/public/imgs/exame-2.jpeg'

const mainProcedures = [
    {
        name: 'Urofluxometria',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageSrc: exame1,
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Dopler Peniano',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        imageSrc: exame2,
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },

    {
        name: 'Dopler Peniano',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
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
        <>
            <div className="bg-lightBlue py-24 sm:py-32 ">
                <h2 className="text-3xl font-bold tracking-tight ml-24 text-primary sm:text-4xl mb-4">Exames</h2>

                {/* exames principais */}
                <div className="mt-6 p-4 space-y-6 md:bg-white lg:bg-white md:w-9/12 lg:w-9/12 rounded-md m-auto">
                    {mainProcedures.map((procedure, index) => (
                        <div key={procedure.name} className={`group relative flex my-2 items-center justify-evenly flex-col md:w-full lg:w-full md:flex-row ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="relative h-full w-96 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64 sm:mb-2 lg:h-full lg:w-96">
                                <img
                                    alt={procedure.imageAlt}
                                    src={procedure.imageSrc}
                                    className="h-full w-10/12 md:w-full m-auto lg:w-full object-cover"
                                />
                            </div>
                            <div className='w-10/12 md:w-6/12 lg:w-6/12'>
                                <h3 className="mt-6 text-lg font-semibold text-primary">{procedure.name}</h3>
                                <p className="text-base text-justify  text-gray-900">{procedure.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
           
        </>
    )
}
