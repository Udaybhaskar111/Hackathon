import React from "react"
import  bookMark  from '../../../assests/Bookmark.svg'
import  domain from '../../../assests/MarketingIcon.svg';
import snowFlake from '../../../assests/Snowflake.svg';
import './CardComponent.scss';
export const CardComponent=()=>{
    return(
        <div className="card">
            <div className="card__header">
                <span className="card__header-text">Adventureworks20</span>
                <div className="card__header-icon">
                    <img src={bookMark} />
                </div>
            </div>
            <div className="card__subscribers">
                <span className="card__subscribers-item">48 subscribers</span>
                <span>3.8</span>
            </div>
            <div className="card__details">
                <div className="card__details-dataQuality">
                    <span className="card__details-dataQuality-name">Data Quality</span>
                    <span className="card__details-dataQuality-value">81%</span>
                </div>
                <div className="card__details-domain">
                    <span className="card__details-domain-name">Domain</span>
                    <div className="card__details-domain-icon">
                        <div>
                            <img src={domain}/>
                        </div>
                        <span>Marketing</span>
                    </div>
                </div>
                
            </div>
            <div className="card__details">
                <div className="card__details-dataQuality">
                    <span className="card__details-dataQuality-name">Data Sensitivity</span>
                    <span className="card__details-dataQuality-value">Highly Restricted</span>
                </div>
                <div className="card__details-domain">
                    <span className="card__details-domain-name">Source Type & Refresh</span>
                    <div className="card__details-domain-icon">
                        <div>
                            <img src={snowFlake}/>
                        </div>
                        <span>SnowFlake</span>
                    </div>
                    <span className="card__details-domain-live">Live</span>
                </div>
            </div>
            <div className="card__buttons">
                <button>Add to Cart</button>
                <button>View Details</button>

            </div>
        </div>
    );
}