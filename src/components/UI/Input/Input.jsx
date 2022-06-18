import React from 'react';

const Input = ({ name = '', label = '', ...rest }) => {
  return (
    <>
        <input name={name} id={name} {...rest}></input>
        <label htmlFor={name}>{label}</label>
    </>
  )
}

export default Input;