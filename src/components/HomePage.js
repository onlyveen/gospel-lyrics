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
        description="Discover a wide collection of gospel songs and lyrics in Telugu."
        url="https://www.gospelminimelodies.com"
      />
      <div className="empty">
        <img src={logo} alt="Logo" />
        <p>Welcome To Gospel Mini Melodies</p>
        <p>You can find all Lyrics and Songs Here.</p>
        <button className="btn" onClick={() => setIsOpen(true)}>
          Open Song List
        </button>
      </div>
    </div>
  );
}

export default HomePage;
