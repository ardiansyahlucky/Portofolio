import About from "../components/Fragments/About";
import ContactForm from "../components/Fragments/ContactForm";
import Navbar from "../components/Fragments/Navbar";
import Project from "../components/Fragments/Projects";
import ToolSkill from "../components/Fragments/ToolSkill";
import ScrollToTop from "react-scroll-to-top";

const Homepage = (props) => {
  
  // const {
  //   style = "items-center",
  // } = props

  return (
    <div className="container">
      <ScrollToTop smooth top={500} color="#84CC16" style={{padding: "5px", margin: "-10px"}} />
      <Navbar/>
      <About />
      <Project/>
      <ToolSkill/>
      <ContactForm/> 
    </div>
  )
}

export default Homepage;