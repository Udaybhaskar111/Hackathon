import React from 'react';
import Bu from '@mui/material/Button';
export const Button=(props)=>{
    const {variant,fu}=props;
  return (
    <div>
        <Bu variant={variant} onClick={fu}>Outlined</Bu>
    </div>
  )
}
