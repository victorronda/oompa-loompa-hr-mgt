import React from 'react';

const Header = ({ title, classNames }) => {
  return (
    <header>
        <h1 className={classNames}>{title}</h1>
    </header>
  )
}

export default Header;