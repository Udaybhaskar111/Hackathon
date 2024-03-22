/* eslint-disable react/prop-types */
import React from 'react';
import Buton from '@mui/material/Button';
export const Button=(props)=>{
    const {label,type,handle}=props;
  return (
    <div>
        <Buton type={type} onClick={handle}>{label}</Buton>
    </div>
  )
}
