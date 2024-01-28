import "./featured.css"

const Featured = () => {
    return ( 
        <div className="featured">
            <div className="featuredItem">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Regent_Street_2011-04-25.jpg/1200px-Regent_Street_2011-04-25.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h1>Regent St</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Regent_Street_2011-04-25.jpg/1200px-Regent_Street_2011-04-25.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h1>Nothings Hill</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Regent_Street_2011-04-25.jpg/1200px-Regent_Street_2011-04-25.jpg" alt="" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>London</h1>
                    <h1>Nothings Hill</h1>
                </div>
            </div>
        </div>
     );
}
 
export default Featured;