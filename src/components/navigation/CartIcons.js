import React, { useContext, useState } from 'react'
import { Link } from 'gatsby'
import reduce from 'lodash/reduce'
import StoreContext from '~/context/StoreContext';

import styled from 'styled-components';
import SearchPopup from './SearchPopup';
import AsideCart from '../cart/AsideCart';

const CartIconsStyle = styled.div`
  font-size: 0px;
  width: 20%;
  max-width: 170px;
  #CartCount, .favCount {
    position: absolute;
    background: #000000;
    color: #ffffff;
    min-width: 16px;
    height: 16px;
    border-radius: 16px;
    line-height: 17px;
    font-size: 11px;
    right: -7px;
    top: -3px;
  }
  #header:not(.stickyHeader) & {
    a.hdicon {
      color: #000000;
    }
  }
  #userSettings, #cart-drawer, #searchPopup {
    color: #050000;
    text-align: left;
    background-color: #ffffff;
    box-shadow: 0 0 15px rgb(5 0 0 / 10%);
    transition: all 0.3s ease-in-out;
  }
  #userSettings {
    visibility: hidden;
    opacity: 0;
    top: 130%;
    padding: 20px;
    width: 300px;
    position: absolute;
    right: 15px;
    z-index: 99;
    &.active {
      visibility: visible;
      opacity: 1;
      top: 100%;
    }
  }
  .customer-links {
    font-size: 12px;
    text-transform: uppercase;
  }
  .btn {
    width: 100%;
  }
  .modal__overlay {
    display: none;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 666;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.4s cubic-bezier(0.29, 0.63, 0.44, 1);
    &.active {
      display: block;
    }
  }
`;

const useQuantity = () => {
  const {
    store: { checkout },
  } = useContext(StoreContext)
  const items = checkout ? checkout.lineItems : []
  const total = reduce(items, (acc, item) => acc + item.quantity, 0)
  return [total !== 0, total]
}

const CartIcons = () => {
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [hasItems, quantity] = useQuantity();

  function toggleSettings(e) {
    e.preventDefault();
    setSettingsOpen(!settingsOpen);
  }

  function closeSearch(e) {
    e.preventDefault();
    setSearchOpen(false);
  }

  function openSearch(e) {
    e.preventDefault();
    setSearchOpen(true);
  }

  function closeCart(e) {
    e.preventDefault();
    setCartOpen(false);
  }

  function openCart(e) {
    e.preventDefault();
    setCartOpen(true);
  }

  return (
    <CartIconsStyle>
      <a href="#" onClick={openSearch} className="hdicon searchIco small--hide medium--hide" title="Search" role="button"><i className="ad flaticon-magnifying-glass"></i></a>
      <a href="#" onClick={toggleSettings} className="hdicon site-settings" title="User Account" role="button"><i className="ad flaticon-user"></i></a>
      <a href="#" className="hdicon wishlist small--hide medium--hide" title="Wishlist"><i className="ad flaticon-like"></i><span className="favCount">0</span></a>
      <a href="#" onClick={openCart} className="hdicon header-cart" title="Cart">
        <i className="ad flaticon-shopping-basket"></i>
        {hasItems && <span id="CartCount" className="site-header__cart-count">{quantity}</span>}
      </a>
      <div id="userSettings" className={settingsOpen ? 'active' : ''}>
        <div className="customer-links">
          <p>
            <a href="#" className="btn">LOGIN</a>
          </p>
          <p className="text-center">New User? <a href="#" className="register">Register Now</a></p>
        </div>
      </div>
      <div className={searchOpen ? 'modal__overlay active' : 'modal__overlay'}></div>
      <SearchPopup closeSearch={closeSearch} searchOpen={searchOpen} />
      <AsideCart closeCart={closeCart} cartOpen={cartOpen} hasItems={hasItems} />
    </CartIconsStyle>
  );
};

export default CartIcons;