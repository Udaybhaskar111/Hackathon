import React from 'react';
export const Input=(props)=>{
    const {type,register}=props;
  return (
    <div>
      <input type={text} {...register}/>
    </div>
  )
}