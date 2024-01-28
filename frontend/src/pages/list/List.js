import Featured from "../../components/featured/featured";
import Header from "../../components/header/header";
import "./list.css"
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { DateRange } from 'react-date-range';
import { format } from "date-fns";
import { useState } from "react";
import SearchItem from "../../components/searchItem/searchItem";





const List = () => {

    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    const [option, setOption] = useState(location.state.option);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false)

    console.log(location);
    return ( 
        
        <div >
            <Header type = "list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Search</h1>
                        <div className="lsItem">
                            <label >Destination</label>
                            <input type="text" placeholder={destination} />
                        </div>
                        <div className="lsItem">
                            <label > Check-in Date</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            
                        </div>
                        <div className="lsItem">
                            <label >Options</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                     type="number" 
                                     className="lsOptionInput"
                                     min={4}
                                     placeholder={option.adult} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                     type="number" 
                                     className="lsOptionInput"
                                     min={4}
                                     placeholder={option.adult} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                     type="number" 
                                     className="lsOptionInput"
                                     min={4}
                                     placeholder={option.adult} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                     type="number" 
                                     className="lsOptionInput"
                                     min={4}
                                     placeholder={option.adult} />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Adult</span>
                                    <input
                                     type="number" 
                                     className="lsOptionInput"
                                     min={4}
                                     placeholder={option.adult} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="listResult">
                        <SearchItem/>
                        <SearchItem/>
                        <SearchItem/>
                    </div>
                </div>
            </div>
            

            
        </div>
        
     );
}
 
export default List;