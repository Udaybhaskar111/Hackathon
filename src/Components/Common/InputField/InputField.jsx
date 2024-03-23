/*Author Uday*/

import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './Input.module.scss';
export const Input = (props) => {
  const { register, label, errors } = props;
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <TextField label={label} {...register} className={styles.input} />
      <p className={styles.errorText}>{errors}</p>
    </div>
  );
};
