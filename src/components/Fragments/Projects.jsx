import imageBand from "/images/bandweb.png";
import image1 from "/images/1.png";
import image2 from "/images/2.png";
import image3 from "/images/3.png";

const Project = () => {
  return (
    <div className="container pt-10 pb-10" id="project">
      <div className="w-full px-4" >
        <h1 className="text-2xl lg:text-3xl font-bold text-lime-500 px-4 text-center">SELECTED PROJECT</h1>
      </div>

      <div className="w-full flex flex-wrap justify-center ">
        <div className="mb-12 p-4 lg:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden" >
            <img className="h-60 w-full object-cover" src={imageBand} alt="" />
            <span>
              <h3 className="font-bold text-xl text-dark mt-5 mb-3 text-center">Website Band</h3>
              <p className="font-medium text-md text-justify ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate a officia, alias eius accusamus praesentium eaque dolore laborum iste iure. Voluptas, sit id quam voluptatem ab nisi unde commodi tempora dignissimos ratione aperiam nam ullam sint quisquam laudantium ad cupiditate alias optio eligendi dolor reprehenderit a vitae! Aspernatur, voluptate. </p>
            </span>
          </div>
        </div>

        <div className="mb-12 p-4 lg:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden" >
          <img className="h-60 w-full object-cover" src={image1} alt="" />
          <span>
            <h3 className="font-bold text-xl text-dark mt-5 mb-3 text-center">E-Commerce</h3>
            <p className="font-medium text-md text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate a officia, alias eius accusamus praesentium eaque dolore laborum iste iure. Voluptas, sit id quam voluptatem ab nisi unde commodi tempora dignissimos ratione aperiam nam ullam sint quisquam laudantium ad cupiditate alias optio eligendi dolor reprehenderit a vitae! Aspernatur, voluptate. </p>
          </span>
          </div>
        </div>

        <div className="mb-12 p-4 lg:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden" >
          <img className="h-60 w-full object-cover" src={image2} alt="" />
          <span>
            <h3 className="font-bold text-xl text-dark mt-5 mb-3 text-center">Portofolio</h3>
            <p className="font-medium text-md text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate a officia, alias eius accusamus praesentium eaque dolore laborum iste iure. Voluptas, sit id quam voluptatem ab nisi unde commodi tempora dignissimos ratione aperiam nam ullam sint quisquam laudantium ad cupiditate alias optio eligendi dolor reprehenderit a vitae! Aspernatur, voluptate. </p>
          </span>
          </div>
        </div>

        <div className="mb-12 p-4 lg:w-1/2">
          <div className="rounded-md shadow-md overflow-hidden" >
          <img className="h-60 w-full object-cover" src={image3} alt="" />
          <span>
            <h3 className="font-bold text-xl text-dark mt-5 mb-3 text-center">Blogspot</h3>
            <p className="font-medium text-md text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex voluptate a officia, alias eius accusamus praesentium eaque dolore laborum iste iure. Voluptas, sit id quam voluptatem ab nisi unde commodi tempora dignissimos ratione aperiam nam ullam sint quisquam laudantium ad cupiditate alias optio eligendi dolor reprehenderit a vitae! Aspernatur, voluptate. </p>
          </span>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Project;