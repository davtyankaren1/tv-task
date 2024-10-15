import React from "react";
import Search from "../../../assets/icons/Search.png";
import Home from "../../../assets/icons/Home.png";
import TVShows from "../../../assets/icons/TvShows.png";
import Movies from "../../../assets/icons/Movies.png";
import Genres from "../../../assets/icons/Genres.png";
import WatchLater from "../../../assets/icons/WatchLater.png";
import User from "../../../assets/images/user.jpg";
import { MenuItem } from "./MenuItem";
import { FooterItem } from "./FooterItem";
import Avatar from "./Avatar";
import "../Menu.css";

const Menu = () => {
  return (
    <div className='menu-bar'>
      <div>
        <Avatar user={User} />
        <div className='menu-bar-items'>
          <ul className='menu-bar-items_ul'>
            <MenuItem src={Search} label='Search' href='' isActive={false} />
            <MenuItem src={Home} label='Home' href='' isActive={true} />
            <MenuItem src={TVShows} label='TV Shows' href='' isActive={false} />
            <MenuItem src={Movies} label='Movies' href='' isActive={false} />
            <MenuItem src={Genres} label='Genres' href='' isActive={false} />
            <MenuItem src={WatchLater} label='Watch Later' isActive={false} />
          </ul>
        </div>
      </div>
      <div className='menu-bar-footer'>
        <ul className='menu-bar-footer_ul'>
          <FooterItem label='Language' href='' />
          <FooterItem label='Get Help' href='' />
          <FooterItem label='Exit' href='' />
        </ul>
      </div>
    </div>
  );
};

export default Menu;
