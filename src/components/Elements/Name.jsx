import imagetes from "/images/NewPic.png"

const Name = (props) => {
  const {
    type = "button",
    children
  } = props

  const handleClick = (event) => {
    event.preventDefault()
    window.open('mailto:ardiansyahlucky13@gmail.com')
  }
 
  return (
    <div className="container pt-10">
      <div className="flex flex-wrap">
        <div className="w-full self-center lg:w-1/2 text-center md:text-left pt-10">  
          <h4 className="text-xl md:text-3xl font-bold text-slate-500 pt-2">Hello , i'm</h4>
          <h1 className="text-2xl md:text-4xl font-bold text-lime-500 ">LUCKY ARDIANSYAH</h1>
          <h2 className="text-xl md:text-3xl font-bold text-slate-500 ">Front End Developer</h2>
          <div className="mx-4 my-4">
            <button onClick={handleClick}
              className="h-8 px-14 font-semibold rounded-full
          bg-lime-500 hover:shadow-lg hover:opacity-80 text-white transition duration-300 ease-in-out"
              type={type}
            >Hire Me</button>
          </div>
        </div>
        <div className="w-full self-end  lg:w-1/2">
          <div className="relative lg-mt-0 lg:right-0">
            <img
              className="max-w-full mx-auto "
              src={imagetes}
              alt="profile" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Name;
