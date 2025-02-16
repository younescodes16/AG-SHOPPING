
import { Outlet } from 'react-router-dom';
import Navbar from "./componets/Navbar/Navbar";
import Footer from "./componets/Footer/Footer"
const Layout = () => {
    return (
        <>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
}

export default Layout;
