import "./header.css"
import {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const Header = ({type}) => {

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);

      const [option, setOption] = useState({

        adult : 1,
        children : 1,
        room : 1

      });

      const [destination, setDestination] = useState("");

      const handleOption = (name, operation)=>{
        setOption( (prev) => ({...prev, [name]: operation === "i" ? option[name] + 1 : option[name] - 1}) )
      }

      const [openDate, setOpenDate] = useState(false);
      const [openOption, setOpenOption] = useState(false);


      const handleDate = () =>{
        setOpenDate(!openDate)
      }

      const handleOpenOption = ()=>{
        setOpenOption(!openOption)
      }

      const handleChange = ()=>{
        navigate("/hotels", {state: {destination, option, date}})
      }

      const location = useLocation()
      const navigate = useNavigate()


    return (

        
        <div className="header">
            
            <div className= {type == "list" ? "headerContainer listMode" : "headerContainer"  }  >
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Car rentals</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Attractions</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport taxis</span>
                    </div>
                </div>
                { type !== "list" &&
                    
                    <>                
                <h1 className="headerTitle"  >A lifetime of discounts? It's Genius.</h1>
                <p className="headerDesc" > Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account</p>
                <button className="headerBtn" > Sign In / Register </button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className="headerIcon" />
                        <input
                         type="text"
                         placeholder="Where are you going?"
                         className="headerSearchInput"
                         onChange={(e)=>setDestination(e.target.value)} 
                         />
                                                 
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                        <span className="headerSearchText"  onClick={handleDate} >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}</span>      
                        { openDate && 
                        <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className="date"
                        />
                        }
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span onClick={handleOpenOption} className="headerSearchText" >  {option.room} and {option.adult} and {option.children}  </span>
                        { openOption && 
                        <div className="options">
                        <div className="optionItem">
                            <div className="optionText">Adult</div>
                            <div className="optionCounter">
                            <button className="optionCounterButton" onClick={() => {handleOption("adult", "i")}} >+</button>
                            <span> {option.adult} </span>
                            <button className="optionCounterButton" onClick={() => {handleOption("adult", "d")}} >-</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <div className="optionText">Children</div>
                            <div className="optionCounter">
                            <button className="optionCounterButton" onClick={() => {handleOption("children", "i")}} >+</button>
                            <span> {option.children} </span>
                            <button className="optionCounterButton" onClick={() => {handleOption("children", "d")}} >-</button>
                            </div>
                        </div>
                        <div className="optionItem">
                            <div className="optionText">Room</div>
                            <div className="optionCounter">
                            <button className="optionCounterButton" onClick={() => {handleOption("room", "i")}} >+</button>
                            <span> {option.room} </span>
                            <button className="optionCounterButton" onClick={() => {handleOption("room", "d")}} >-</button>
                            </div>
                            
                        </div>

                      

                    </div>}                        
                        
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleChange} > Search </button>
                    </div>
                </div>
                </>}

            </div>
        </div>
        
     );
}
 
export default Header;