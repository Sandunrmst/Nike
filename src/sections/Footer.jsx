import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../data"


const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/"><img src={footerLogo} width={150} height={50}/></a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm"> It’s not just about style, it’s about enhancing your journey with unparalleled quality and innovative features.</p>

          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon)=>(
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <img src={icon.src} alt={icon.alt} width={25}/>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
              {footerLinks.map((section)=> (
                <div key={section}> 
                  <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                  <ul>
                    {section.links.map((link)=>(
                      <li className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-coral-red cursor-pointer"><a>{link.name}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer