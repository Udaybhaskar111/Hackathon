/* eslint-disable react/prop-types */
/*
    @Author : Durga Lalitha
*/

import React from 'react';
import bookMark from '../../../assests/Bookmark.svg';
import domain from '../../../assests/MarketingIcon.svg';
import snowFlake from '../../../assests/Snowflake.svg';
import './CardComponent.scss';
export const CardComponent = ({ data }) => {
  console.log(data);
  return (
    <div className="card">
      <div className="card__header">
        <span className="card__header-text">{data.title}</span>
        <div className="card__header-icon">
          <img src={bookMark} />
        </div>
      </div>
      <div className="card__subscribers">
        <span className="card__subscribers-item">
          {data.subscribers} subscribers
        </span>
        <span>3.8</span>
      </div>
      <div className="card__details">
        <div className="card__details-dataQuality">
          <span className="card__details-dataQuality-name">Data Quality</span>
          <span className="card__details-dataQuality-value">
            {data.dataQuality}
          </span>
        </div>
        <div className="card__details-domain">
          <span className="card__details-domain-name">Domain</span>
          <div className="card__details-domain-icon">
            <div>
              <img src={domain} />
            </div>
            <span>{data.domain}</span>
          </div>
        </div>
      </div>
      <div className="card__details">
        <div className="card__details-dataQuality">
          <span className="card__details-dataQuality-name">
            Data Sensitivity
          </span>
          <span className="card__details-dataQuality-value">
            {data.dataSecurity}
          </span>
        </div>
        <div className="card__details-domain">
          <span className="card__details-domain-name">
            Source Type & Refresh
          </span>
          <div className="card__details-domain-icon">
            <div>
              <img src={snowFlake} />
            </div>
            <span>{data.sourceType}</span>
          </div>
          <span className="card__details-domain-live">{data.live}</span>
        </div>
      </div>
      <div className="card__buttons">
        <button className="card__buttons-cart">Add to Cart</button>
        <button className="card__buttons-details">View Details</button>
      </div>
    </div>
  );
};
