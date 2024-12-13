import React,{useEffect} from 'react'
import Navbar from '../../common/Navbar/Navbar';
import TopNav from '../../common/TopNav/TopNav';
import { Outlet,useLocation } from 'react-router-dom';
import Footer from '../../common/Footer/Footer';

const LayoutPage = () => {

    const ScrollToTop = () => {
        const { hash, pathname } = useLocation();

        useEffect(() => {
        // Scroll to the specific section if there's a hash in the URL
        if (hash) {
            const sectionId = hash.replace('#', '');
            const element = document.getElementById(sectionId);
            if (element) {
            element.scrollIntoView();
            }
        } else {
            // Scroll to the top when the route changes and there's no hash
            window.scrollTo({ top: 0 });
        }
        }, [hash, pathname]);

        return null;
    }
  return (
    <div>
        <ScrollToTop/>
        <TopNav/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default LayoutPage