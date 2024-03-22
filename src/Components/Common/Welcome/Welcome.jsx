import React from 'react';
import './Welcome.scss';
import circle from '../../assests/fonts/play-circle.svg';
/**
 * Desc: Welcome component with a welcome text and watch Markeptplace Demo button
 * Author:charan
 */
const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__text">
        <h5 className="welcome__text-h5">
          Hi Maya, Welcome to Corporate Data Marketplace.
        </h5>
        <p className="welcome__text-p">
          Here you can explore Data Products from different domains and request
          access for published Data Products.
        </p>
      </div>

      <div className="welcome__demo">
        <img className="welcome__demo-img" src={circle} alt="play-circle" />
        <span className="welcome__demo-span">Watch Marketplace Demo</span>
      </div>
    </div>
  );
};

export default Welcome;
