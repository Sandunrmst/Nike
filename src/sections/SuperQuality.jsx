import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">

        <div className="flex flex-1 flex-col">
          <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
          <h2 className="font-palanquin text-4xl font-bold lg:max-w-lg">
            We Provide you <span className="text-coral-red">Super</span>
            <span className="text-coral-red">
               Quality</span> Shoes
          </h2>
          <p className="mt-4 lg:max-w-lg info-text">Experience the fusion of comfort and elegance with our carefully designed footwear. It’s not just about style, it’s about enhancing your journey with unparalleled quality and innovative features.</p>

          <div className="mt-10">
            <Button label={"Shop Now"}/>
          </div>
        </div>

        <div className="flex flex-1 justify-center items-center">
          <img src={shoe8} alt="Quality Shoe" width={570} height={520} className="object-contain"/>
        </div>

    </section>
  )
}

export default SuperQuality