import { Link } from 'gatsby';
import React, { useContext } from 'react'
import styled from 'styled-components';

import StoreContext from '../../context/StoreContext'
import LineItem from './lineitem/LineItem'

const MiniCartStyle = styled.ul`
  width: 100%;
  padding: 0 15px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const MiniCartTotalStyle = styled.ul`
  width: 100%;
  font-size: 14px;
  padding: 15px 15px 25px;
  border-top: 1px solid #eeeeee;
  .freeShipMsg {
    background-color: rgba(5, 0, 0, 0.05);
    padding: 10px 15px;
    margin: -15px -15px 15px;
    display: flex;
    align-items: center;
    .ad {
      margin-right: 10px;
      font-size: 24px;
    }
  }
  .cart-subtotal-row {
    margin-bottom: 10px;
    font-size: 16px;
    text-align: left;
    font-weight: 700;
    padding: 10px 0;
    text-transform: uppercase;
    justify-content: space-between;
    padding: 0 0 10px;
    margin-bottom: 0;
  }
`;

const MiniCart = ({ hasItems }) => {
  const {
    store: { checkout },
  } = useContext(StoreContext)

  const handleCheckout = () => {
    window.open(checkout.webUrl)
  }

  const lineItems = checkout.lineItems.map(item => (
    <LineItem key={item.id.toString()} item={item} />
  ))
  return (
    <>
      <MiniCartStyle>
        {hasItems && lineItems}
        {!hasItems && <li id="cart-title">You don't have any items in your cart.</li>}
      </MiniCartStyle>
      <MiniCartTotalStyle>
        <li id="freeShipMsg" class="freeShipMsg" ><i class="ad flaticon-delivery-truck"></i> Spent <b class="freeShip"></b> more for free shipping</li>
        <li id="freeShipclaim" class="freeShipMsg freeShipclaim"><i class="ad flaticon-delivery-truck"></i> You have got <b>FREE SHIPPING</b></li>
        <li class="cart-subtotal-row d-flex">
          <span>Subtotal:</span>
          <span class="product-price">
            <span class="money">{checkout.subtotalPrice} €</span>
          </span>
        </li>
        <li class="buttonSet">
          <p class="cart__shipping">Shipping &amp; taxes calculated at checkout</p>
          {/*checkout.totalTax*/}
          {/*checkout.totalPrice*/}
          <button
            className="btn btn--secondary"
            onClick={handleCheckout}
            disabled={checkout.lineItems.length === 0}
          >
            Check out
          </button>
        </li>
      </MiniCartTotalStyle>
    </>
  )
}

export default MiniCart