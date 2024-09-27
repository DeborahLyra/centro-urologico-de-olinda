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


const people = [
  {
    name: 'Abelardo Alves',
    role: 'Urologia, Uroneurologia e Cirurgia Robótica',
    imageUrl: abelardoAlves,
  },
  {
      name: 'Márcio Novaes',
      role: 'Urologia Geral e IST',
      imageUrl: marcioNovaes,
    },
    {
      name: 'Márcio A. Novaes',
      role: 'Clínico Geral',
      imageUrl: marcioNovaesJR ,
    },
    {
      name: 'MUrilo Ferreira',
      role: 'Urologia, Endorologia e Cirurgia Robótica',
      imageUrl: muriloFerreira,
    },
    {
      name: 'Renato Leal',
      role: 'Urologia, Endorologia e Cirurgia Robótica',
      imageUrl: renatoLeal,
    },
    {
      name: 'Ricardo Lyra',
      role: 'Urologia e Andrologia',
      imageUrl: ricardoLyra,
    },
    {
      name: 'Roberta Novaes',
      role: 'Fisioterapeuta Pélvica',
      imageUrl:robertaNovaes,
    },
    {
      name: 'Rodolfo Brilhante',
      role: 'Urologia e Cirurgia Reconstrutora',
      imageUrl:rodolfoBrilhante,
    },
    {
      name: 'Sérgio Moraes',
      role: 'Urologia, Endorologia e Transplante Renal',
      imageUrl: sergioMoraes,
    },
    {
      name: 'Wilton Bezerra',
      role: 'Urologia Geral e Medicina Esportiva',
      imageUrl: wiltonBezerra,
    },
]

export function ListOfDoctors() {
  return (
    <div className="bg-lightBlue py-24 sm:py-32">
      <div className="max-w-2xl ml-8 mb-4">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Conheça Nossa Equipe</h2>
        </div>
      <div className="bg-white mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 ">
        


        <div className="overflow-x-auto py-8">
          <ul className="grid grid-cols-5 gap-x-6 gap-y-2 min-w-[1000px] sm:grid-cols-5">
            {people.map((person, index) => (
              <li key={index} className="flex flex-col p-0">
                <img
                  src={person.imageUrl}
                  alt={`Imagem ${index + 1}`}
                  className="h-56 w-full rounded object-cover"
                />
                <p className="mt-2 text-sm font-bold text-left text-gray-700 ">{person.name}</p>
                <p className="mt-2 text-sm font-medium text-left text-gray-700">{person.role}</p>
              </li>
            ))}
          </ul>
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
