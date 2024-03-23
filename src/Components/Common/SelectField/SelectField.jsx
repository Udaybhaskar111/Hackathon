
import React from 'react';
import styles from './SelectField.module.scss';
export const Select = (props) => {
  const { register, options, fieldname, errors } = props;
  console.log(options, 'as the opyion');
  return (
    <div>
      <select {...register}>
        <option value="select the below" disabled>
          Select the below
        </option>
        {options.map((item, index) => (
          <option key={index} value={item.value}>
            {item.name}
          </option>
        ))}
      </select>
      <p className={styles.errorText}>{errors}</p>
    </div>
  );
};
