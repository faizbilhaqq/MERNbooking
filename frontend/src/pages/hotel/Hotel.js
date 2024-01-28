import Header from "../../components/header/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleArrowLeft,
    faCircleArrowRight,
    faCircleXmark,
    faLocationDot,
  } from "@fortawesome/free-solid-svg-icons";
import "./hotel.css"
import { useState } from "react";


const Hotel = () => {

    const [open, setOpen] = useState(false);
    const [slideNumber, setSlideNumber] = useState(0);

    const handleOpen = (i)=>{
        setSlideNumber(i)
        setOpen(true)

    }

    const handleMove = (direction) =>{

        let newslideNumber;

        if (direction === "r"){

            newslideNumber = slideNumber === 5 ? 0 : slideNumber+1
        }
        else{
            newslideNumber = slideNumber === 0 ? 5 : slideNumber-1
        }

        setSlideNumber(newslideNumber)
    }


    const photos  = [

        {src : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/bc/8e/68/photo0jpg.jpg?w=1200&h=1200&s=1"},
        {src : "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/de/london.jpg?w=700&h=500&s=1"},
        {src : "https://www.londonkensingtonguide.com/wp-content/uploads/2022/06/London-Portobello-Road-Southbank-Tower-Bridge-The-Shard-0425.jpg"},
        {src : "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/55/72.jpg"}, 
        {src : "https://cdn1-production-images-kly.akamaized.net/KeMGlyrAe497oj0Ss80wCklae6U=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1216092/original/016671600_1461727293-london-bigben-1500x850.jpg"},
        {src : "https://i.guim.co.uk/img/media/d3ac2c6b4414bf470dbf1db82a8443a7b163ab72/0_192_5760_3456/master/5760.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=14f095208a1030a4a037d150633bd958"}

    ]



    return ( 
        <div>
        <Header type="list" />
        <div className="hotelContainer">

            {open && 

            <div className="slider">
                <FontAwesomeIcon className="close" onClick={()=>setOpen(false)} icon={faCircleXmark} />
                <FontAwesomeIcon className="arrow" onClick={()=>handleMove("l")} icon={faCircleArrowLeft} />
                <div className="sliderWrapper">
                    <img src={photos[slideNumber].src} className="sliderImg" alt="" />
                </div>
                <FontAwesomeIcon className="arrow" onClick={()=>handleMove("r")} icon={faCircleArrowRight} />
                
            </div>
            
            }

            <div className="hotelWrapper">
                <button className="bookNow" >Reserve or Book Now!</button>
                <h1 className="hotelTitle">London Tower Hotel</h1>
                <div className="hotelAddress">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span>Abbey Road St.</span>
                </div>
                <span className="hotelDistance">Excellent Location - 500m from BigBen</span>
                <span className="hotelPriceHighlight">Book a stay over $114 at this property and get a free airport taxi</span>
                <div className="hotelImages">
                    {photos.map((photo, i)=>(
                        <div className="hotelImgWrapper" key={i} >
                            <img src={photo.src} onClick={()=>handleOpen(i)} className="hotelImg" />
                        </div>
                    ))}
                </div>
                <div className="hotelDetails">
                    <div className="hotelDetailsTexts">
                        <h1 className="hotelTitle">Stay in the heart of the city</h1>
                        <p className="hotelDesc">
                        Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                        Street Apartments has accommodations with air conditioning and
                        free WiFi. The units come with hardwood floors and feature a
                        fully equipped kitchenette with a microwave, a flat-screen TV,
                        and a private bathroom with shower and a hairdryer. A fridge is
                        also offered, as well as an electric tea pot and a coffee
                        machine. Popular points of interest near the apartment include
                        Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                        airport is John Paul II International Kraków–Balice, 16.1 km
                        from Tower Street Apartments, and the property offers a paid
                        airport shuttle service.
                        </p>
                    </div>
                    <div className="hotelDetailsPrice">
                        <h1>Perfect for a 9-night stay!</h1>
                        <span>  Located in the real heart of Krakow, this property has an
                        excellent location score of 9.8!</span>
                        <h2>
                            <b>$925</b> (9 nights)
                        </h2>
                        <button>Reserve or Book Now!</button>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Hotel;