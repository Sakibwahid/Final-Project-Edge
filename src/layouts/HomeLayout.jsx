import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const HomeLayout = () => {
    return (
        <>
            <header className="w-full fixed left-0 top-0 right-0 z-50 bg-white shadow-xl py-2">
                <Navbar></Navbar>
            </header>
            <main className="w-11/12 max-w-screen-xl mx-auto">
                <Outlet></Outlet>
            </main>
            <footer className="bg-gray-200">
                <Footer></Footer>
            </footer>
        </>
    );
};

export default HomeLayout;