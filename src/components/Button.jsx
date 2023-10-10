

const Button = ({label, iconURL, backgroundColor, textColor, borderColor}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}`
        :"bg-coral-red text-white border-coral-red"}  rounded-full border`}>
        {label}

        {iconURL && <img src={iconURL} alt="arrow right" className="ml-2 rounded-full"/>}
    </button>
  )
}

export default Button