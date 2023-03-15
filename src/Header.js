import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
  return (
    <div className="Header">
      <div className='header__logo'>
        <StorefrontIcon fontSize='large' className='header__logoImage'/> 
        <h2 className='header__logoTitle'>eSHOP</h2>
      </div>
      <div className='header__search'>
        <input type="text" className="header__searchInput"></input>
        <SearchIcon className="header__searchIcon"/>
      </div>
      <div className='header__nav'>
        <div className="nav__item">
          <span className='nav__itemLineOne'>
            Hello Guest
          </span>
          <span className='nav__itemLineTwo'>
            Sign In
          </span>
        </div>
        <div className="nav__item">
          <span className='nav__itemLineOne'>
           Your
          </span>
          <span className='nav__itemLineTwo'>
            Shop
          </span>
        </div>
        <div className="nav__itemBasket">
          <span className='nav__itemBasketIcon'>
           <ShoppingBasketIcon />
          <span className='nav__itemBasketCount'>
            0
          </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
