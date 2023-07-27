import MyPDF from "/CV/CV_LuckyA.pdf";

const Profile = () => {

  const handleCV = (event) => {
    event.preventDefault();
    window.open(MyPDF, "_blank");
    console.log("berhasil")
  }


  return (
    // <a href={myPDF} download="My_File.pdf"> Download Here </a>
    <div className="container" id="about">
      <div className="flex flex-wrap mt-10 ">
        <div className="w-full self-center px-4 lg:w-1/2 hidden md:block ">
          <img className="px-16" src="/images/4.png" alt="" />
        </div>
        <div className="ww-full self-center px-4 lg:w-1/2" >
          <h1 className="text-4xl font-bold text-lime-500 py-2 px-4 text-center">ABOUT ME</h1>
          <p className="text-justify px-20 font-medium text-md mt-3 ">
            My Name is Lucky Ardiansyah , and I am a bachelor's degree graduate from Gunadarma University, majoring in electrical engineering. I had an internship at PT PLN Persero as Maintenance Electrical for about two months and CCIT FTUI as IT Support, and I also worked as Maintenance Support at PT Master Steel Mfc. <br/><br/>
            I am very interested in the world of programming specifically for web programming and I also attended programming training such as learning the Javascript Programming Language at Dicoding and also Junior Web Developer training at Digitalent Scholarship Kominfo, from attending this training I have skills in web programming such as HTML, CSS, Javascript , React Js and Tailwind CSS
          </p>
          <button onClick={handleCV}
            className="h-14 px-16 font-semibold rounded-full ml-20 mt-5
          bg-lime-500 text-whit hover:shadow-lg hover:opacity-80 text-white transition duration-300 ease-in-out"
            type="submit"
          >Download CV</button>
        </div>
      </div>
    </div>
  )
}

export default Profile;