/* eslint-disable react/prop-types */
import React from 'react';
import Buton from '@mui/material/Button';
export const Button=(props)=>{
    const {label,type}=props;
  return (
    <div>
        <Buton type={type}>{label}</Buton>
    </div>
  )
}
