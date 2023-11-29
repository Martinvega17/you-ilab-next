import Image from 'next/image'

export default function Info() {
    return (
        <div>
            <h1 className="text-5xl text-[#01BE96] font-latoBold">
                Nuestro Compromiso de Servicio
            </h1>
            <p className="text-black dark:text-neutral-300 mt-8 h-auto text-left mb-6">
            En el Youth Innovation Laboratory (You I Lab), desde el Instituto Potosino de Investigación Científica y Tecnológica (IPICYT), nos comprometemos a empoderar a la juventud mexicana para abordar complejos problemas sociales. Vemos una oportunidad única en la abundante población joven y los desafíos actuales. Nuestro servicio se enfoca en proyectos de impacto social, impulsando a través de tecnologías de la información y comunicación. Buscamos la inclusión, innovación y acción colectiva. En un mundo en constante cambio, somos un faro de esperanza, colaborando incansablemente para un México donde la juventud sea protagonista de un futuro más brillante y equitativo.
            </p>
            <Image src='/assets/varios/workteam.jpg' alt='Imagen trabajo en equipo' height={540} width={970}/>
        </div>
    )
}