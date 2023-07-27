
const Images = () => {
  return (
    <div className="flex justify-center space-x-8 items-center">
      <div>
        <img
          className="w-12 h-12 mb-2"
          src="/images/vscode.png"
          alt="vscode" />
        <p className="font-bold">Vscode</p>
      </div>
      <div>
        <img
          className="w-12 h-12 mb-2 ml-2"
          src="/images/react.png"
          alt="react" />
        <p className="font-bold">React JS</p>
      </div>
      <div>
        <img
          className="w-14 h-12 mb-2"
          src="/images/tailwind.png"
          alt="tailwind" />
        <p className="font-bold">Tailwind</p>
      </div>
     
    </div>
  )
}

export default Images;