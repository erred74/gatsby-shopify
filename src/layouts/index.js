import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import ContextProvider from '../provider/ContextProvider'
import { createGlobalStyle } from "styled-components";
import Navigation from '../components/navigation/Navigation'
import '../assets/sass/custom.scss'
import Footer from '../components/Footer';

const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Flaticon";
  src: url("../../static/fonts/Flaticon.eot");
  src: url("../../static/fonts/Flaticon.eot?#iefix") format("embedded-opentype"),
       url("../../static/fonts/Flaticon.woff2") format("woff2"),
       url("../../static/fonts/Flaticon.woff") format("woff"),
       url("../../static/fonts/Flaticon.ttf") format("truetype"),
       url("../../static/fonts/Flaticon.svg#Flaticon") format("svg");
  font-weight: normal;
  font-style: normal;
}

@media screen and (-webkit-min-device-pixel-ratio:0) {
  @font-face {
    font-family: "Flaticon";
    src: url("./Flaticon.svg#Flaticon") format("svg");
  }
}

[class^="flaticon-"]:before, [class*=" flaticon-"]:before,
[class^="flaticon-"]:after, [class*=" flaticon-"]:after {   
  font-family: Flaticon;
font-style: normal;
}

.flaticon-diamond:before { content: "\f100"; }
.flaticon-magnifying-glass:before { content: "\f101"; }
.flaticon-shopping-bag:before { content: "\f102"; }
.flaticon-user:before { content: "\f103"; }
.flaticon-headphones:before { content: "\f104"; }
.flaticon-placeholder:before { content: "\f105"; }
.flaticon-like:before { content: "\f106"; }
.flaticon-next:before { content: "\f107"; }
.flaticon-left-arrow:before { content: "\f108"; }
.flaticon-down-arrow:before { content: "\f109"; }
.flaticon-instagram:before { content: "\f10a"; }
.flaticon-menu:before { content: "\f10b"; }
.flaticon-shopping-basket:before { content: "\f10c"; }
.flaticon-open-box:before { content: "\f10d"; }
.flaticon-map-point:before { content: "\f10e"; }
.flaticon-box:before { content: "\f10f"; }
.flaticon-gift-voucher:before { content: "\f110"; }
.flaticon-delivery-truck:before { content: "\f111"; }
.flaticon-email:before { content: "\f112"; }
.flaticon-calendar:before { content: "\f113"; }
.flaticon-shield:before { content: "\f114"; }
.flaticon-cancel:before { content: "\f115"; }
.flaticon-close:before { content: "\f116"; }

*, ::after, ::before {
  box-sizing: border-box;
}

body, button, input, select, textarea {
  font-family: arial;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}

body {
  background-color: #ffffff;
  color: #333333;
  font-size: 14px;
  line-height: 1.4;
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
  word-wrap: break-word;
  letter-spacing: 0.02em;
}

a {
  background-color: transparent;
}

a, a:after, a:before {
  transition: all .3s ease-in-out;
}

a, img {
  outline: 0!important;
  border: 0;
}

[role=button], a, button, input, label, select, textarea {
  touch-action: manipulation;
}

p {
  margin: 0 0 15px 0;
  &:last-child {
    margin-bottom: 0;
  }
}

a {
  color: #444444;
  text-decoration: none;
  outline: none;
}

ol, ul {
  margin: 0;
  padding: 0;
}

b, strong {
  font-weight: 700;
}

.btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: auto;
  text-decoration: none;
  cursor: pointer;
  color: #776657;
  border-color: #776657;
  border-style: solid;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  height: 32px;
  &.btn--secondary {
    color: #ffffff;
    background-color: #282828;
    border-color: rgba(0, 0, 0, 0);
  }
}

li {
  list-style: none;
}

button, input, optgroup, select, textarea {
  color: inherit;
  font: inherit;
  margin: 0;
  outline: 0;
}

[role=button], a, button, input, label, select, textarea {
  touch-action: manipulation;
}

button {
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  -webkit-font-smoothing: inherit;
  -moz-osx-font-smoothing: inherit;
  -webkit-appearance: none;
  text-align: inherit;
}

input, textarea, select {
  font-size: 14px;
  margin-bottom: 15px;
  border: 1px solid #e6e2df;
  background-color: white;
  color: #111111;
  max-width: 100%;
  line-height: 1.2;
  padding: 8px 15px;
}

form {
  position: relative;
}

.text-right {
  text-align: right!important;
}

.icon__fallback-text, .visually-hidden {
  position: absolute!important;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

@media only screen and (min-width: 992px) {
  body {
    letter-spacing: 0.02em;
  }
  .large-up--hide {
    display: none!important;
  }
}

@media only screen and (min-width: 768px) {
  input, textarea, select {
    padding: 10px 18px;
  }
  input, .form-control, .btn {
    height: 38px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .medium--hide {
    display: none!important;
  }
}
`;

const Layout = ({ children }) => {
  return (
    <ContextProvider>
      <GlobalStyles />
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
            allShopifyCollection {
              nodes {
                title
                id
                handle
              }
            }
          }
        `}
        render={data => (
          <>
            <Navigation categories={data.allShopifyCollection.nodes} siteTitle={data.site.siteMetadata.title} />
            <div>
              {children}
            </div>
            <Footer />
          </>
        )}
      />
    </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout