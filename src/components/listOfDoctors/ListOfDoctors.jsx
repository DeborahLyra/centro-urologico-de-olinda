import abelardoAlves from '/public/imgs/doctors/abelardo-alves.jpeg'
import marcioNovaes from '/public/imgs/doctors/marcio-novais.jpeg'
import marcioNovaesJR from '/public/imgs/doctors/marcio-novais-jr.jpeg'
import muriloFerreira from '/public/imgs/doctors/murilo-ferreira.jpeg'
import renatoLeal from '/public/imgs/doctors/renato-leal.jpeg'
import ricardoLyra from '/public/imgs/doctors/ricardo-lyra.jpeg'
import robertaNovaes from '/public/imgs/doctors/roberta-novaes.jpeg'
import rodolfoBrilhante from '/public/imgs/doctors/rodolfo-brilhante.jpeg'
import sergioMoraes from '/public/imgs/doctors/sergio-moraes.jpeg'
import wiltonBezerra from '/public/imgs/doctors/wilton-bezerra.jpeg'
import defaultProfile from '/public/imgs/profile-default-pic.webp'

const people = [
  {
    name: 'Abelardo Alves',
    role: 'Urologia, Uroneurologia e Cirurgia Robótica',
    imageUrl: abelardoAlves,
    urlPage: ''
  },
  {
    name: 'Carolina Mayumi',
    role: 'Urologia Feminina e Urodinâmica',
    imageUrl: defaultProfile,
    urlPage: ''
  },
  {
      name: 'Márcio Novaes',
      role: 'Urologia Geral e IST',
      imageUrl: marcioNovaes,
      urlPage: ''
    },
    {
      name: 'Márcio A. Novaes',
      role: 'Clínico Geral',
      imageUrl: marcioNovaesJR ,
      urlPage: ''
    },
    {
      name: 'Murilo Ferreira',
      role: 'Urologia, Endourologia e Cirurgia Robótica',
      imageUrl: muriloFerreira,
      urlPage: ''
    },
    {
      name: 'Renato Leal',
      role: 'Urologia, Endourologia e Cirurgia Robótica',
      imageUrl: renatoLeal,
      urlPage: ''
    },
    {
      name: 'Ricardo Lyra',
      role: 'Urologia e Andrologia',
      imageUrl: ricardoLyra,
      urlPage: 'https://ricardolyraandrologista.com.br/'
    },
    {
      name: 'Roberta Novaes',
      role: 'Fisioterapeuta Pélvica',
      imageUrl:robertaNovaes,
      urlPage: ''
    },
    {
      name: 'Rodolfo Brilhante',
      role: 'Urologia e Cirurgia Reconstrutora',
      imageUrl:rodolfoBrilhante,
      urlPage: ''
    },
    {
      name: 'Sandra Santana',
      role: 'Fisioterapeuta Pélvica',
      imageUrl: defaultProfile,
      urlPage: ''
    },
    {
      name: 'Sérgio Moraes',
      role: 'Urologia, Endourologia, Cirurgia Robótica e Transplante Renal',
      imageUrl: sergioMoraes,
      urlPage: ''
    },
    {
      name: 'Wilton Bezerra',
      role: 'Urologia Geral e Medicina Esportiva',
      imageUrl: wiltonBezerra,
      urlPage: ''
    },
]

export function ListOfDoctors() {
  return (
    <div className="bg-white py-16 sm:py-32">
      <div className="max-w-2xl ml-8 mb-4">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Conheça Nossa Equipe</h2>
        </div>
      <div className=" mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 rounded lg:px-8 ">
        <div className="relative overflow-x-auto py-8">
          <ul className="grid grid-cols-5 gap-x-6 gap-y-2 min-w-[1000px] sm:grid-cols-5">
            {people.map((person, index) => (
              <li key={index} className="flex flex-col p-0">
                <a href={person.urlPage} target='_blank'>
                  <img
                    src={person.imageUrl}
                    alt={`Imagem ${index + 1}`}
                    className="h-48 w-full rounded object-cover md:h-56 lg:h-56"
                  />
                </a>
                <p className="mt-2 text-sm font-bold text-left text-gray-700">{person.name}</p>
                <p className="mt-2 text-sm font-medium text-left text-gray-700">{person.role}</p>
              </li>
            ))}
          </ul>

          {/* Indicativo de scroll */}
          <div className="absolute top-0 right-0 w-10 h-full  pointer-events-none"></div>

          {/* Texto Indicativo */}
          <div className="flex justify-center mt-2 lg:hidden">
            <span className="text-gray-500 text-sm">Deslize para ver mais</span>
          </div>

          {/* Barra de Rolagem */}
          <div className="absolute bottom-0 left-0 w-full h-1 pointer-events-none lg:bg-transparent">
            <div className="h-full bg-gray-300 transition-all duration-300 ease-in-out lg:bg-transparent" style={{ width: '50%' }} />
          </div>
        </div>



        {/* <div className="overflow-x-auto">
        <ul role="list" className="grid grid-cols-5 gap-x-4 gap-y-2 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-4">
                <img alt="" src={person.imageUrl} className="h-28 w-28 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-primary">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        </div> */}

      </div>
    </div>
  )
}
