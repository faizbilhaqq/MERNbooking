import "./searchItem.css"

const SearchItem = () => {
    return ( 
        <div className="searchItem">
            <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Regent_Street_2011-04-25.jpg/1200px-Regent_Street_2011-04-25.jpg" 
            alt="" 
            className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">London Bridge Hotel</h1>
                <span className="siDistance">500 from Center</span>
                <span className="siTaxiOp">Free airport Taxis</span>
                <span className="siSubtitle">Studio Apartment with Air conditioning</span>
                <span className="siFeatures">Entire studio • 1 bathroom • 21m² 1 full bed</span>
                <span className="siCancelOp">Free cancellation </span>
                <span className="siCancelOpSubtitle">You can cancel later, so lock in this great price today!</span>


            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Excellent</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$112</span>
                    <span className="siTaxOp">Include taxes and fees</span>
                    <span className="siCheckButton">See availability    </span>
                </div>


            </div>
        </div>
     );
}
 
export default SearchItem;