import ContactHome from "../../components/contactHome";
import about from '@/assets/footer/about.webp';

export default function ContactForms() {
  return (
    <div>
      <div className="about">
        <div
          className="h-[23rem] sm:h-[20rem] md:h-[18rem] lg:h-[20rem] xl:h-[25rem] w-full flex justify-center items-center"
          style={{
            backgroundImage: `url(${about.src})`,
            backgroundSize: "100%",
          }}
        >
          <div className="container text-center sm:px-2 md:px-4 lg:px-8 py-4">
            <h1 className="text-white text-3xl lg:text-6xl font-MontserratBold text-center">Contactese con el You I Lab</h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto px-4 sm:px-16 py-10 mt-20 max-h-[700px]">
        <div className="w-full lg:w-1/2">
          {/* Información de Dirección */}
          <h2 className="text-[#807BB1] text-5xl pb-6">Dirección</h2>
          <p className="text-[#a5c8eb]">
            Camino a la Presa San José 2055. <br />
            Col. Lomas 4a sección, C.P. 78218 <br />
            San Luis Potosí, S.L.P.
          </p>

          {/* Información de Servicio al Cliente */}
          <h2 className="text-[#807BB1] text-5xl py-6">Servicio al Cliente</h2>
          <p className="text-[#a5c8eb]">
            Tel (444) 834 30 00 <br />
            Ext. 2104 y 2108
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          {/* Mapa de Google */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2176.234836113207!2d-101.03613648864766!3d22.149559380840252!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98c8d0777cff%3A0x8ed9d9a98ee5ca91!2sInstituto%20Potosino%20de%20Investigaci%C3%B3n%20Cient%C3%ADfica%20y%20Tecnol%C3%B3gica%20A.C.!5e0!3m2!1ses!2smx!4v1700555975555!5m2!1ses!2smx"
            style={{ width: "100%", height: "100%", border: '0' }}
            allowfullscreen=""
            loading="lazy"
            data-darkreader-inline-border-top=""
            data-darkreader-inline-border-right=""
            data-darkreader-inline-border-bottom=""
            data-darkreader-inline-border-left=""
          ></iframe>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto max-h-screen pb-4">
        <div className="w-full lg:w-full">
          <ContactHome />
        </div>
      </div>
    </div>
  );
}
