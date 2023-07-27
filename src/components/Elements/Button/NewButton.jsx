const NewButton = (props) => {
  const {
    children, 
    classname= "bg-blue-600", 
    onClick = () => {}, 
    type="button",
  } = props;
  
  return (
    <button
      className={`h-10 px-28 mt-4 max-w-full font-semibold rounded-md ${classname} text-white`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
} 

export default NewButton;