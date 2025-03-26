import { useState, useEffect } from "react";

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        if (window.scrollY > 50) {
            setShowNavbar(true);
        } else {
            setShowNavbar(false);
        }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
    <div
        className={`relative top-0 left-0 w-full text-white text-2xl flex justify-around items-center py-4 transition-all duration-300 z-50 ${
            showNavbar
            ? "bg-white/10 backdrop-blur-md shadow-lg border-b border-white/20"
            : "opacity-0 pointer-events-none"
        }`}
    >
        <div>Who?</div>
        <div>Offerings</div>
        <div>Book yours..</div>
        </div>

    );
};

export default Navbar;
