import Navbar from '../Components/Navbar';
import NavbarLogo from '../assets/logo/zyara.png';
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";
import Footer from '../Components/Footer';

function HomeLayout( {children} ) {
    return (
        <>
               <Navbar/>
               
                { children }
                <Footer/> 
        </>  
    )
    
}


export default HomeLayout