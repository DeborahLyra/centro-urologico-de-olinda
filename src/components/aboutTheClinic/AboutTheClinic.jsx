import React from 'react'
import exame1 from '/public/imgs/exame-1.jpeg'
import exame2 from '/public/imgs/exame-2.jpeg'
import exame3 from '/public/imgs/exame-3.png'
import exame4 from '/public/imgs/exame-4.png'

const mainProcedures = [
    {
        name: 'Urofluxometria e Urodinâmica',
        description: 'A urofluxometria e a urodinâmica são exames essenciais para avaliar a função do trato urinário. A urofluxometria mede o fluxo urinário, a velocidade e o tempo necessário para esvaziar a bexiga, ajudando a diagnosticar obstruções urinárias e outros distúrbios. Já a urodinâmica é um exame mais completo, que analisa a pressão dentro da bexiga e a função muscular durante o armazenamento e esvaziamento da urina. Ambos os exames são úteis no diagnóstico de problemas como hiperplasia prostática benigna (HPB), incontinência e disfunções vesicais. São procedimentos rápidos e indolores.',
        imageSrc: exame1,
        imageAlt: 'Urofluxometria e Urodinâmica',
        href: '#',
    },    
    {
        name: 'Doppler Peniano e Testicular',
        description: 'O Doppler Peniano e Testicular são exames ultrassonográficos usados para avaliar o fluxo sanguíneo no pênis e nos testículos. O Doppler Peniano é aplicado em casos de disfunção erétil, medindo a circulação nas artérias e veias do pênis para identificar problemas vasculares, como insuficiência arterial ou fuga venosa. Já o Doppler Testicular avalia a vascularização dos testículos, sendo útil no diagnóstico de varicocele, torção testicular e tumores. Ambos os exames são seguros, minimamente invasivos e fornecem informações essenciais para o tratamento de condições urológicas, contribuindo para uma avaliação completa da saúde masculina.',
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
    {
        name: 'Terapia de Biofeedback',
        description: 'A fisioterapia pélvica é uma área especializada que tem como objetivo o tratamento de disfunções nos músculos da região pélvica. Entre as principais técnicas utilizadas estão o Biofeedback EMG, que monitora a atividade elétrica muscular, permitindo o controle consciente da musculatura. A eletroestimulação é outra abordagem, que utiliza correntes elétricas de baixa intensidade para estimular a contração dos músculos pélvicos, ajudando a fortalecer e reabilitar essa região. Além disso, os exercícios pélvicos são essenciais, consistindo em atividades específicas para melhorar o tônus, coordenação e resistência dos músculos do assoalho pélvico.',
        imageSrc: exame4,
        imageAlt: 'Peniscopia',
        href: '#',
    },
]


export function AboutTheClinic() {
    return (
        <>
            <div className="bg-lightBlue py-8 sm:py-10 " id='exams'>
                <h2 className="text-3xl font-bold tracking-tight ml-16 text-primary sm:text-4xl mb-4">Exames</h2>

                {/* exames principais */}
                <div className="mt-4 p-4  pb-8 space-y-6 md:bg-white lg:bg-white md:w-9/12 lg:w-9/12 rounded-md m-auto">
                    {mainProcedures.map((procedure, index) => (
                        <div key={procedure.name} className={`group relative flex my-2 items-center justify-evenly flex-col md:w-full lg:w-full lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} `}>
                            <div className="relative h-full w-96 overflow-hidden rounded-lg sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64 sm:mb-2 lg:h-full lg:w-96">
                                <img
                                    alt={procedure.imageAlt}
                                    src={procedure.imageSrc}
                                    className="h-full w-10/12 rounded-md md:w-full m-auto lg:w-full object-cover"
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
