import { star } from "../assets/icons"


const PopularProductCard = ({imgURL, name, price, ratings}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full hover:scale-110 transition duration-500">
        <img src={imgURL} alt={name} className="w-[250px] h-[280px] "></img>
        <div className="mt-8 flex justify-start gap-2">
            <img src={star} alt="ratings" width={25} height={25}/>
            <p className="font-montserrat text-lg leading-normal text-slate-gray">{ratings}</p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-xl leading-normal">{price}</p>
    </div>
  )
}

export default PopularProductCard