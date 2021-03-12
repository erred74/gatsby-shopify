import React, { useContext } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image"

import StoreContext from '../../../context/StoreContext'

const LineItemStyle = styled.li`
  display: inline-block;
  width: 100%;
  font-size: 14px;
  padding: 10px 0;
  line-height: normal;
  border-top: 1px solid #eeeeee;
  .grid__item {
    float: left;
    padding-left: 15px;
    padding-right: 15px;
    padding: 0;
    &.product-image {
      width: 33.33333%;
      @media only screen and (min-width: 768px) {
        width: 25%;
      }
    }
    &.product-details {
      text-align: left;
      padding-left: 15px;
      width: 66.66667%;
      @media only screen and (min-width: 768px) {
        width: 75%;
      }
    }
  }
  .remove {
    float: right;
    padding: 7px;
    margin: -7px -7px 0 0;
    color: #050000;
    opacity: 0.5;
  }
  .pName {
    color: #050000;
    white-space: normal;
    text-decoration: none;
    display: block;
    line-height: 1.3;
    margin-right: 20px;
  }
  .vropts {
    color: #050000;
    opacity: 0.6;
    padding: 5px 0;
  }
`;

const LineItem = props => {
  const { item } = props
  const {
    removeLineItem,
    store: { client, checkout },
  } = useContext(StoreContext)
  const image = item.variant.image.src;
  const variantImage = item.variant.image ? (
    <img src={image} alt={`${item.title}`} width="75" height="auto" />
  ) : null

  const selectedOptions = item.variant.selectedOptions
    ? item.variant.selectedOptions.map(
        option => `${option.name}: ${option.value} `
      )
    : null

  const handleRemove = () => {
    removeLineItem(client, checkout.id, item.id)
  }

  return (
    <LineItemStyle>
      <Link to={`/product/${item.variant.product.handle}/`} title="#" className="grid__item product-image">
        {variantImage}
      </Link>
      <div className="grid__item product-details">
        <button type="button" onClick={handleRemove} className="remove"><i className="ad flaticon-close"></i></button>
        <Link className="pName" to={`/product/${item.variant.product.handle}/`}>{item.title}</Link>
        <div className="vropts" rv-text="item.variant_title">
          {item.variant.title === !'Default Title' ? item.variant.title : ''}{selectedOptions}
        </div>
        <div className="priceRow">
          <span className="product-price">
            <span className="money">{item.variant.price} €</span>
          </span> x <span>{item.quantity}</span>
        </div>
      </div>
    </LineItemStyle>
  )
}

export default LineItem