import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavBarStyle = styled.nav`
  #header:not(.stickyHeader) & {
    background: none;
    .site__navigation > li > a {
      color: #000000;
    }
  }
  @media only screen and (min-width: 992px) {
    .site__navigation.left {
      text-align: left;
    }
    .site__navigation > li {
      display: inline-block;
      text-align: left;
      margin-right: 10px;
    }
    .site__navigation > li.ctsize, .site__navigation > li.dropdown {
      position: relative;
    }
    .site__navigation a {
      text-decoration: none;
      letter-spacing: 0.02em;
      display: block;
      opacity: 1;
      -webkit-font-smoothing: antialiased;
    }
    .site__navigation > li > a {
      color: #111111;
      font-size: 12px;
      font-weight: 400;
      text-transform: uppercase;
      position: relative;
      line-height: 40px;
      padding: 0 15px;
    }
  }
`;

const NavBar = ({ categories }) => {
  return (
    <NavBarStyle>
      <ul className="site__navigation left">
        {categories.map((category) => {
          return (
            <li key={category.id} className="lvl1">
              <Link to={category.handle}>
                <span className="b-header-menu__link-text">{category.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </NavBarStyle>
  );
};

export default NavBar;