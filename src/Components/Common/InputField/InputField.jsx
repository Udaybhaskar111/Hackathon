import React from 'react'

export default function Input(props) {
    const {type,register}=props;
  return (
    <div>
      <input type={text} {...register}/>
    </div>
  )
}