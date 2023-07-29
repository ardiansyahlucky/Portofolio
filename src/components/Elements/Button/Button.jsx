import { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Button = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className="flex justify-end space-x-2 my-1 text-xl">
      <ul className="hidden md:flex space-x-6 font-bold py-2 px-2 ">
        <li className="nav-item">
          <Link className="hover:text-lime-500 cursor-pointer" to="home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="hover:text-lime-500 cursor-pointer" to="about"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
          >About</Link>
        </li>
        <li className="nav-item">
          <Link className="hover:text-lime-500 cursor-pointer" to="project"
            spy={true}
            smooth={true}
            offset={30}
            duration={500}
          >Project</Link>
        </li>
        <li className="nav-item">
          <Link className="hover:text-lime-500 cursor-pointer" to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >Contact</Link>
        </li>
      </ul>

      
      <div onClick={handleNav} className="block md:hidden mt-3 px-2 items-center">
        {!nav ? <AiOutlineMenu size={20}  />
          : <AiOutlineClose size={20} />}

        <div className={!nav ? "fixed right-[-100%] top-0" : "fixed bg-white shadow-lg rounded-lg right-4 text-lime-500 ease-in-out duration-500 mt-5"}>
        {/*  */}
          <ul className="uppercase font-sans">
            <li className="nav-item p-2">
              <Link className="hover:text-lime-500 cursor-pointer" to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >Home</Link>
            </li>
            <li className="nav-item p-2">
              <Link className="hover:text-lime-500 cursor-pointer" to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >About</Link>
            </li>
            <li className="nav-item p-2">
              <Link className="hover:text-lime-500 cursor-pointer" to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >Project</Link>
            </li>
            <li className="nav-item p-2">
              <Link className="hover:text-lime-500 cursor-pointer" to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >Contact</Link>
            </li>
          </ul>

        </div>
      </div>
      


    </div>
  )
}


export default Button;