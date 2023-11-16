"use client"
import ContactHome from "../../components/contactHome";


export default function ContactForms() {
  return (
<div className="flex flex-col md:flex-row w-full px-4 sm:px-16 py-10 mt-20">

<div className="w-full md:w-1/2">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118252.07847694744!2d-101.1881954027344!3d22.14969980000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842a98c8d0777cff%3A0x8ed9d9a98ee5ca91!2sInstituto%20Potosino%20de%20Investigaci%C3%B3n%20Cient%C3%ADfica%20y%20Tecnol%C3%B3gica%20A.C.!5e0!3m2!1ses!2smx!4v1699994157110!5m2!1ses!2smx"
    
    style={{ border: 0, width: "100%", height: "100%" }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

<div className="w-full md:w-1/2">
  <ContactHome />
</div>

</div>






  );
}
