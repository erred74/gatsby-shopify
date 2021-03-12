import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Logo from '../../images/logo.png';
import NavBar from './NavBar'
import CartIcons from './CartIcons'

const NavStyles = styled.div`
  position: relative;
  z-index: 15;
  background-color: #ffffff;
  border-bottom: 1px solid #fafafa;
  &:not(.stickyHeader) {
    background: none;
    box-shadow: none;
    position: absolute;
    left: 0;
    right: 0;
    z-index: 97;
    border: none;
  }
  .site-header {
    display: flex;
    width: 100%;
    align-items: center;
    min-height: 70px;
    position: relative;
    padding: 0 60px;
  }
  .header-logo {
    margin: 0;
    min-width: 170px;
    max-width: 150px;
    .header-logo-link {
      font-weight: 700;
      font-size: 30px;
      line-height: 1;
      text-decoration: none;
    }
    img, svg {
      display: block;
      max-width: 120px;
      max-height: 50px;
    }
  }
  .site-header > .header-logo, .site-header > div, .site-header > nav {
    flex: 1;
  }
  a.hdicon {
    position: relative;
    color: #030505;
    display: inline-block;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding: 0 9px;
    .ad {
      font-size: 18px;
    }
  }
  @media only screen and (max-width: 991px) {
    .mobile-nav, .icons-col {
      max-width: 75px;
    }
  }
  @media only screen and (min-width: 767px) {
    a.hdicon {
      .ad {
        font-size: 17px;
      }
    }
  }
`;

const Navigation = ({ siteTitle, categories }) => {

  return (
    <NavStyles id="header" className="animated">
      <header className="site-header left">
        <div className="mobile-nav large-up--hide">
          <div className="hdicon js-mobile-nav-toggle open">
            <a href="#" className="hdicon js-mobile-nav-toggle open"><i className="ad ad-bars-l" aria-hidden="true"></i><i className="ad flaticon-menu" aria-hidden="true"></i></a>
            <a href="#" className="hdicon searchIco" title="Search"><i className="ad flaticon-magnifying-glass"></i></a>
          </div>
        </div>
        <h1 className="header-logo">
          <Link to="/" className="header-logo-link">
            <img src={Logo} alt={siteTitle} />
            <span className="visually-hidden">Avone - Ultimate Shopify Theme</span>
          </Link>
        </h1>
        <NavBar categories={categories} />
        <CartIcons />
      </header>
    </NavStyles>
  )
}

Navigation.propTypes = {
  siteTitle: PropTypes.string,
}

Navigation.defaultProps = {
  siteTitle: ``,
}

export default Navigation