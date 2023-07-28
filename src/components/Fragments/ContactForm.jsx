import NewButton from "../Elements/Button/NewButton";
// import InputForm from "../Elements/ContactForm";
import ImagesEmail from "/Icons/gmail.png";
import ImagesWa from "/Icons/whatsapp.png";
import ImagesLinkedin from "/Icons/linkedin.png";
import ImagesIg from "/Icons/instagram.png";
import ImageFooter from "/wave/footerwave.svg";

const ContactForm = () => {

  
  return (
    <div className="container mt-20" id="contact">
      <div className="px-4">
        <h1 className="text-3xl font-bold text-lime-500 px-4 text-center">Contact Me</h1>
      </div>
      <div className=" px-4 flex flex-wrap justify-center">
        <div className="p-10 md:w-1/2 -mb-28">
          <div className="flex justify-center gap-4 py-2">
            <a href="mailto:ardiansyahlucky13@gmail.com" title="My Email" target="_blank">
              <img src={ImagesEmail} alt="My Email" />
            </a>
            <a href="https://wa.me/6282114676522?text=Hallo Lucky Ardiansyah" title="My Whatsapp" target="_blank">
              <img src={ImagesWa} alt="My Whatsapp" />
            </a>
            <a href="https://www.linkedin.com/in/lucky-ardiansyah-1463471b3/" title="My Linkedin" target="_blank">
              <img src={ImagesLinkedin} alt="My Linkedin" />
            </a>
            <a href="https://www.instagram.com/____luckyardiansyh/" title="My Instagram" target="_blank">
              <img src={ImagesIg} alt="My Instagram" />
            </a>
          </div>
          <div>
            <p className="text-xl font-medium text-md text-justify ">
              Bulak Barat RT 07/ RW 08 No.16 Kode Pos 16442. Kecamatan Cipayung, Depok, Jawa Barat
            </p>
          </div>
        </div>
        <div className="p-10 md:w-1/2">
          <p className="text-xl font-medium text-md py-8 mt-10 mb-5 text-justify ">
            <span className="text-lime-500"> Thank you for visiting</span> , If there are criticisms and suggestions you can send them on my Social media, your criticisms and suggestions will be good input for me in the future.
          </p>
        </div>
      </div>
      <div className="absolute inset-x-0 -mt-14">
        <img src={ImageFooter} alt="" className="" />
      </div>
    </div>

  )
}

export default ContactForm;