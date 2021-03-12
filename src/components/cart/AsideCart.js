import React from 'react';
import styled from 'styled-components';
import MiniCart from './MiniCart'

const AsideCartStyle = styled.div`
  color: #050000;
  text-align: left;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgb(5 0 0 / 10%);
  transition: all 0.3s ease-in-out;
  width: 90%;
  max-width: 320px;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: -400px;
  z-index: 555;
  &.active {
    right: 0;
  }
  .close-cart {
    color: #050000;
    font-size: 16px;
    position: absolute;
    right: 10px;
    top: 7px;
  }
  > h4 {
    color: #050000;
    font-size: 18px;
    text-align: left;
    margin: 10px 15px;
  }
`;

const AsideCart = ({ closeCart, cartOpen, hasItems }) => {
  return (
    <AsideCartStyle className={cartOpen ? 'active' : ''}>
      <a className="close-cart" href="#" onClick={closeCart}><i className="ad flaticon-cancel" aria-hidden="true"></i></a>
      <h4>Your cart</h4>
      <MiniCart hasItems={hasItems} />
    </AsideCartStyle>
  );
};

export default AsideCart;