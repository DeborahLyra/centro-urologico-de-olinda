import React from 'react'
import exame1 from '/public/imgs/exame-1.jpeg'
import exame2 from '/public/imgs/exame-2.jpeg'
import exame3 from '/public/imgs/exame-3.png'

const mainProcedures = [
    {
        name: 'Urofluxometria',
        description: 'A urofluxometria é um exame urológico não invasivo que avalia o fluxo urinário do paciente. Ele mede a quantidade de urina expelida, a velocidade do jato urinário e o tempo necessário para esvaziar a bexiga. Durante o exame, o paciente urina em um dispositivo que registra essas informações. É útil no diagnóstico de problemas como obstruções urinárias, hiperplasia prostática benigna (HPB) e distúrbios de esvaziamento vesical. Os resultados ajudam o médico a identificar possíveis alterações no trato urinário inferior e a definir o tratamento mais adequado. O exame é rápido e indolor.',
        imageSrc: exame1,
        imageAlt: 'Urofluxometria',
        href: '#',
    },
    {
        name: 'Dopler Peniano',
        description: 'O Doppler Peniano é um exame utilizado para avaliar o fluxo sanguíneo no pênis, principalmente em casos de disfunção erétil. Ele mede a circulação nas artérias e veias do pênis, verificando se há alterações que possam comprometer a ereção. O exame é realizado com um ultrassom, muitas vezes após a aplicação de um medicamento que provoca ereção, permitindo observar a resposta vascular. Ele ajuda a diagnosticar causas vasculares da disfunção erétil, como insuficiência arterial ou fuga venosa. O Doppler Peniano é seguro, minimamente invasivo e oferece informações importantes para o tratamento.',
        imageSrc: exame2,
        imageAlt: 'Dopler Peniano',
        href: '#',
    },

    {
        name: 'Peniscopia',
        description: 'A peniscopia é um exame médico utilizado para inspecionar a superfície do pênis. Durante o procedimento, o médico usa um aparelho de aumento, semelhante a um microscópio, chamado colposcópio, para examinar detalhadamente a pele do pênis, região perianal e escroto. Em alguns casos, pode ser aplicada uma solução de ácido acético para evidenciar lesões invisíveis a olho nu. A peniscopia é importante para a detecção precoce de lesões que podem evoluir para câncer ou outras complicações. O exame é simples, indolor e rápido.',
        imageSrc: exame3,
        imageAlt: 'Peniscopia',
        href: '#',
    },
]


export function AboutTheClinic() {
    return (
        <>
            <div className="bg-lightBlue py-24 sm:py-32 ">
                <h2 className="text-3xl font-bold tracking-tight ml-16 text-primary sm:text-4xl mb-4">Exames</h2>

                {/* exames principais */}
                <div className="mt-4 p-4  pb-8 space-y-6 md:bg-white lg:bg-white md:w-9/12 lg:w-9/12 rounded-md m-auto">
                    {mainProcedures.map((procedure, index) => (
                        <div key={procedure.name} className={`group relative flex my-2 items-center justify-evenly flex-col md:w-full lg:w-full lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="relative h-full w-96 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64 sm:mb-2 lg:h-full lg:w-96">
                                <img
                                    alt={procedure.imageAlt}
                                    src={procedure.imageSrc}
                                    className="h-full w-10/12 md:w-full m-auto lg:w-full object-cover"
                                />
                            </div>
                            <div className='w-10/12 lg:w-6/12'>
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
