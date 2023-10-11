import workteam from '@/assets/varios/workteam.jpg'
import Image from 'next/image'

export default function Info() {
    return (
        <div>
            <h1 className="text-5xl text-[#01BE96] font-latoBold">
                Nuestro Compromiso de Servicio
            </h1>
            <p className="text-black mt-8 h-auto text-left mb-6">
                En el Youth Innovation Laboratory (You I Lab), abrazamos una misión apasionada y un compromiso inquebrantable. Nuestra iniciativa, impulsada desde el Instituto Potosino de Investigación Científica y Tecnológica (IPICYT), tiene como objetivo fundamental empoderar a la juventud de nuestro país y canalizar su energía y creatividad hacia la solución de problemas sociales. Nos encontramos en un momento sin precedentes en la historia, donde la población joven en México es vasta y los retos sociales son complejos. En este contexto, vemos una oportunidad única para crear un espacio en el que la iniciativa de la juventud se convierta en un motor de proyectos con un impacto positivo en nuestra sociedad, contribuyendo a un futuro más prometedor.
                Nuestro compromiso de servicio es, en esencia, trabajar en colaboración con la juventud para impulsar el progreso de México. Estamos dedicados a empoderar a la juventud mediante el uso de tecnologías de la información y la comunicación en proyectos de impacto social. Además, nos esforzamos por fomentar la inclusión, la innovación y la acción colectiva. En un mundo en constante cambio, el You-i Lab es un faro de esperanza y acción, trabajando incansablemente para forjar un México donde la voz y la iniciativa de la juventud sean pilares de un futuro más brillante y equitativo.
            </p>
            <Image src={workteam} alt='Imagen trabajo en equipo' height={540} width={970}/>
        </div>
    )
}