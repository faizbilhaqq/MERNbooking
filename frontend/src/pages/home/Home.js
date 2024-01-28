import "./home.css"
import Featured from "../../components/featured/featured";
import Header from "../../components/header/header";
import PropertyList from "../../components/propertyList/propertyList";
import FeaturedProperties from "../../components/featuredProperties/featuredProperties";
import MailList from "../../components/mailList/mailList";
import Footer from "../../components/footer/footer";

const Home = () => {
    return ( 
        <div className="content">
            <Header />
            <div className="homeContainer">
            <Featured/>
            <h1 className="homeTitle">Browse by property type</h1>
            <PropertyList/>
            <h1 className="homeTitle">Home Guests Love</h1>
            <FeaturedProperties/>
            <MailList/>
            <Footer/>
         
            </div>
        </div>
     );
}
 
export default Home;