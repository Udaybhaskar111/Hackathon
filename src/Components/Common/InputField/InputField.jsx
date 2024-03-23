import React from 'react';
import TextField from '@mui/material/TextField';
import styles from './Input.module.scss';
export const Input = (props) => {
  // eslint-disable-next-line react/prop-types
  const { register, label, errors } = props;
  return (
    <div>
      <TextField label={label} {...register} />
      <p className={styles.errorText}>{errors}</p>
    </div>
  );
};
