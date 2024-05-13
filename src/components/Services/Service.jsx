import { FaLeaf, FaPaintBrush, FaRibbon } from "react-icons/fa"
import { IoIosRainy } from "react-icons/io"


const Service = () => {
    const services=[
        {
            title:"Modarn Design",
            icon:"FaPaintBrush",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure earum quo odit, atque ipsam."
        },
        {
            title:"Outdoor Solutions",
            icon:"IoIosRainy",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure earum quo odit, atque ipsam."
        },
        {
            title:"Environment Solutions",
            icon:"FaLeaf",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure earum quo odit, atque ipsam."
        },
        {
            title:"Top Quality",
            icon:"FaRibbon",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure earum quo odit, atque ipsam."
        },
    ]
  return (
    <section>
        <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
                
            </div>    
        </div>
    </section>
  )
}

export default Service