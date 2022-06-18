import React from 'react';
import './Header.css';

const Header = ({ title, classNames }) => {
  return (
    <>
        <h1 className={classNames}>{title}</h1>
    </>
  )
}

export default Header;