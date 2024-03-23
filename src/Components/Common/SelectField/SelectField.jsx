/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import styles from './SelectField.module.scss';
export const Select = (props) => {
  const { register, options, fieldname, errors } = props;
  console.log(options, 'as the opyion');
  return (
    <div>
      <p className={styles.field}>{fieldname}</p>
      <select {...register} className={styles.select}>
        <option value="select the below" selected={true}  disabled className='option'>
          Select the below
        </option>
        {options.map((item, index) => (
          <option key={index} value={item.value} className='option'>
            {item.name}
          </option>
        ))}
      </select>
      <p className={styles.errorText}>{errors}</p>
    </div>
  );
};
