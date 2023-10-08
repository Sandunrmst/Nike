

const Button = ({label, iconURL}) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none bg-coral-red rounded-full outline-none border-none">
        {label}

        <img src={iconURL} alt="arrow right" className="ml-2 rounded-full"/>
    </button>
  )
}

export default Button