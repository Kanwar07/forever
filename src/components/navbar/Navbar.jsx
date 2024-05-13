import React from "react";
import heart from "../../assets/heart.png";
import heartwhite from "../../assets/heartwhite.png";
import navbarstyle from "./Navbar.module.css";
import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex flex-row justify-around items-center pt-16 pr-[100px] pb-16 pl-[100px] text-[#ffffff]">
        <div class={navbarstyle.dropdown}>
          <NavLink to="/">
            <button class={navbarstyle.dropbtn}>Home</button>
          </NavLink>
          <div class={navbarstyle.dropdowncontent}>
            <button className="pt-4 uppercase">Menu Variations</button>
            <br />
            <button className="pb-2 pt-2 uppercase">Slider Variations</button>
            <br />
            <button className="pb-4 uppercase">Preloader Variations</button>
          </div>
        </div>
        <div>
          <img
            src={heart}
            alt="heart"
            style={{ height: "10px", width: "10px" }}
          />
        </div>
        <div class={navbarstyle.dropdown}>
          <button class={navbarstyle.dropbtn}>About</button>
          <div class={navbarstyle.dropdowncontent}>
            <NavLink to="/him">
              <button className="p-0 uppercase">About Him</button>
            </NavLink>
            <br />
            <NavLink to="/her">
              <button className="p-0 uppercase">About Her</button>
            </NavLink>
          </div>
        </div>
        <div>
          <img
            src={heart}
            alt="heart"
            style={{ height: "10px", width: "10px" }}
          />
        </div>
        <div class={navbarstyle.dropdown}>
          <button class={navbarstyle.dropbtn}>Gallery</button>
          <div class={navbarstyle.dropdowncontent}>
            <button className="pt-4 uppercase">Gallery</button>
            <br />
            <button className="pb-2 pt-2 uppercase">Gallery With Slider</button>
            <br />
            <button className="uppercase">Full Gallery - 5 Column</button>
            <br />
            <button className="pb-2 pt-2 uppercase">
              Full Gallery - 4 Column
            </button>
            <br />
            <button className="pb-4 uppercase">Full Gallery - 3 Column</button>
          </div>
        </div>
        <div>
          <img
            src={heart}
            alt="heart"
            style={{ height: "10px", width: "10px" }}
          />
        </div>
        <div>The Story</div>
        <div className="h-16 w-16 border border-[#f0394d] bg-[#f0394d] rounded-full flex flex-row justify-around items-center text-center">
          G <img src={heartwhite} alt="heartwhite" className="size-4" /> M
        </div>
        <div class={navbarstyle.dropdown}>
          <button class={navbarstyle.dropbtn}>The Wedding</button>
          <div class={navbarstyle.dropdowncontent}>
            <button className="pt-4 uppercase">Location</button>
            <br />
            <button className="pb-2 pt-2 uppercase">Accomodation</button>
            <br />
            <button className="uppercase">Bridesmaid</button>
            <br />
            <button className="pb-2 pt-2 uppercase">Groomsmen</button>
            <br />
            <button className="pb-4 uppercase">Gift Registry</button>
          </div>
        </div>
        <div>
          <img
            src={heart}
            alt="heart"
            style={{ height: "10px", width: "10px" }}
          />
        </div>
        <div class={navbarstyle.dropdown}>
          <button class={navbarstyle.dropbtn}>Blog</button>
          <div class={navbarstyle.dropdowncontent}>
            <button className="pt-4 uppercase">Blog</button>
            <br />
            <button className="pb-2 pt-2 uppercase">Blog Slider</button>
            <br />
            <button className="pb-2 uppercase">Blog Parallax Image</button>
            <br />
            <button className="pb-4 uppercase">Blog Parallax Sidebar</button>
          </div>
        </div>
        <div>
          <img
            src={heart}
            alt="heart"
            style={{ height: "10px", width: "10px" }}
          />
        </div>
        <div>Page</div>
        <div>
          <img
            src={heart}
            alt="heart"
            style={{ height: "10px", width: "10px" }}
          />
        </div>
        <div class={navbarstyle.dropdown}>
          <button class={navbarstyle.dropbtn}>RSVP</button>
          <div class={navbarstyle.dropdowncontent}>
            <button className="pt-4 uppercase">RSVP - 1</button>
            <br />
            <button className="pb-2 pt-2 uppercase">RSVP - 2</button>
            <br />
            <button className="pb-2 uppercase">RSVP - 3</button>
            <br />
            <button className="pb-4 uppercase">Custom</button>
          </div>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
