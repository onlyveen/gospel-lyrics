import React, { useState, useEffect } from "react";
import { useSidebar } from "../utils/SidebarContext";
import { transliterateSearch } from "../utils/transliterate";

import SongList from "../components/SongList";
import songs from "../data/songs";
import logo from "../assets/logo_white.svg";

function Sidebar() {
  const [search, setSearch] = useState("");
  const { isOpen, setIsOpen } = useSidebar();

  const transliteratedSearch = transliterateSearch(search);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="sidebar-container">
      <button
        className={`toggle-btn ${isOpen ? "open" : "close"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "<<" : ">>"}
      </button>
      <div className={`sidebar ${isOpen ? "open" : "close"}`}>
        <a href="/" className="logo">
          <img
            src={logo}
            alt="Logo"
          />
        </a>
        <div className="input">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {transliteratedSearch && (
            <small>searching for "{`${transliteratedSearch}`}"</small>
          )}
        </div>
        <SongList
          songs={songs}
          search={search}
          transliteratedSearch={transliteratedSearch}
          onClick={() => setIsOpen(false)}
        />
      </div>
    </div>
  );
}

export default Sidebar;
