import ImageReact from "/images/react.png";
import ImageVscode from "/images/vscode.png";
import ImageTailwind from "/images/tailwind.png";


const Images = () => {
  return (
    <div className="flex justify-center space-x-8 items-center">
      <div>
        <img
          className="w-12 h-12 mb-2"
          src={ImageVscode}
          alt="vscode" />
        <p className="font-bold">Vscode</p>
      </div>
      <div>
        <img
          className="w-12 h-12 mb-2 ml-2"
          src={ImageReact}
          alt="react" />
        <p className="font-bold">React JS</p>
      </div>
      <div>
        <img
          className="w-14 h-12 mb-2"
          src={ImageTailwind}
          alt="tailwind" />
        <p className="font-bold">Tailwind</p>
      </div>
     
    </div>
  )
}

export default Images;