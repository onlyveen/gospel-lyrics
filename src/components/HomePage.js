import React from "react";
import { useSidebar } from "../utils/SidebarContext";
import logo from "../assets/logo_red.svg";
import SEOHead from "./SEOHead";

function HomePage() {
  const { setIsOpen } = useSidebar();

  return (
    <div>
      <SEOHead
        title="Gospel Mini Melodies"
        description="Welcome To Gospel Mini Melodies. You can find all Lyrics and Songs Here. Oh prema Oh Prema, Nesthama Nesthama Needu Hrudayam Sokama & Sarvonnathuda Sarvadikari. An also All Lyrics of Oh prema Oh Prema, Nesthama Nesthama Needu Hrudayam Sokama & Sarvonnathuda Sarvadikari"
        url="https://www.gospelminimelodies.com"
      />
      <div className="empty">
        <img src={logo} alt="Logo" />
        <h1>Welcome To Gospel Mini Melodies</h1>
        <p>You can find all Lyrics and Songs Here.</p>
        <button className="btn" onClick={() => setIsOpen(true)}>
          Open Song List
        </button>
      </div>
    </div>
  );
}

export default HomePage;
