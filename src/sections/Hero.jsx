import Button from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../data"

const Hero = () => {
  return (
   <section id="home" className="w-full flex border-2 border-red-500 p-2 xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
    <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
      <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
      <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82] font-bold">
        <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span><br/>
        <span className="text-coral-red inline-block mt-2">Nike</span> Shoes
      </h1>
      <p className="font-montserrat text-slate-gray text-lg leading-7 mt-6 mb-14 sm:max-w-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, corporis repellat. A eius laborum eos.</p>
      <Button label={"Shop Now"} iconURL={arrowRight}/>

      <div className="flex justify-start items-start flex-wrap w-full mt-16 gap-16">
        {statistics.map((item)=>{
          return(
           <div key={item.label}>
            <p className="text-4xl font-palanquin font-bold">{item.value}</p>
            <p className="leading-6 font-montserrat text-slate-gray">{item.label}</p>
           </div>
          )
        })}
      </div>

    </div>
   </section>
  )
}

export default Hero