import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      
      <div className="flex-1">
        <img src={offer} width={780} height={688} className="object-contain w-full"/>
      </div>

      <div className="flex-1 flex-col">
         
          <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
           <span className="text-coral-red">Special</span>{" "}
            <span className="text-black">Offer</span>
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">It’s not just about style, it’s about enhancing your journey with unparalleled quality and innovative features.</p>
          <p className="mt-4 lg:max-w-lg info-text">Our offer is designed to enhance your shopping experience, giving you access to premium products at unbeatable prices. Don’t miss out on this limited-time opportunity to elevate your style and comfort. Hurry, the clock is ticking!</p>

          <div className="mt-10 flex gap-10">
            <Button label={"Shop Now"} iconURL={arrowRight}/>
            <Button label={"Learn More"} backgroundColor='bg-white' borderColor='border-slate-gray' textColor='text-slate-gray'/>
          </div>
        </div>

    </section>
  )
}

export default SpecialOffer