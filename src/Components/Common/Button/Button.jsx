/* eslint-disable react/prop-types */
/*
  @Author Uday Kumar
*/

import React from 'react';
import Buton from '@mui/material/Button';
export const Button = (props) => {
  const { label, type, handle } = props;
  return (
    <div>
      <button type={type} onClick={handle}>
        {label}
      </button>
    </div>
  );
};
