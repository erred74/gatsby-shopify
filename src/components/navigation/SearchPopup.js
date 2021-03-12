import React from 'react';
import styled from 'styled-components';

const SearchPopupStyle = styled.div`
  color: #050000;
  text-align: left;
  background-color: #ffffff;
  box-shadow: 0 0 15px rgb(5 0 0 / 10%);
  transition: all 0.3s ease-in-out; 
  width: 100%;
  padding: 40px 50px;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  transform: translateY(-100%);
  box-shadow: 0 0 15px rgb(5 0 0 / 10%);
  &.active {
    opacity: 1;
    transform: translateY(0);
  }
  .closeSearch {
    color: #050000;
    font-size: 16px;
    position: absolute;
    top: 10px;
    right: 20px;
  }
  h4 {
    color: #050000;
  }
  .input-group {
    border-bottom: 1px solid #eeeeee;
  }
  input {
    border: 0;
    padding: 5px 0;
  }
  .btn {
    color: #050000;
    opacity: 0.5;
    padding: 0;
    border: 0 none;
    background: none;
  }
`;

const SearchPopup = ({ searchOpen, closeSearch }) => {
  return (
    <SearchPopupStyle className={searchOpen ? 'active' : ''}>
      <a className="closeSearch" href="#" onClick={closeSearch}><i className="ad flaticon-cancel" aria-hidden="true"></i></a>
      <h4 className="mt-0">What are you looking for?</h4>
      <form action="/search" method="get" className="search-header search" role="search">
        <input type="hidden" name="type" value="product" />
        <input type="hidden" name="options[prefix]" value="none" />
        <div className="input-group">
          <input className="input-group__field search__input form-control" type="search" name="q" placeholder="Search for products, brands and more" value="" autoComplete="off" />
          <input type="hidden" name="options[prefix]" value="last" aria-hidden="true" />
          <span className="input-group__btn">
            <button className="btn search__submit" type="submit">
              <i className="ad flaticon-magnifying-glass"></i>
              <span className="icon__fallback-text">Submit</span>
            </button>
          </span>
        </div>
        <ul className="search-results"></ul>
      </form>
    </SearchPopupStyle>
  );
};

export default SearchPopup;