import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './Input.module.scss';
export const Input = (props) => {

  const { register, label, errors } = props;
  return (
    <div>
      <TextField label={label} {...register} />
      <p className={styles.errorText}>{errors}</p>
    </div>
  );
};
