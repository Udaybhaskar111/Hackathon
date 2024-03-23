import React from 'react';
/**
 *
 * @param {*} props which passes params as Image source and value
 * @author:Charan
 */
const FilterTab = (props) => {
  const { source } = props;
  return (
    <div className="FilterTab">
      <div className="FilterTab__div">
        <img src={source} alt="icon" className="FilterTab-img" />
        <span className="FilterTab-span">{props.value}</span>
      </div>
    </div>
  );
};

export default FilterTab;
