/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import './Header.scss';
import img from '../../../assests/Image1.svg';
import notification from '../../../assests/Notification.svg';
import question from '../../../assests/Question.svg';
import userroles from '../../../assests/User-Roles.svg';
const Header = () => {
    /**added header with title and three icons at the right side
                @autor  Greeshmika*/
    return (
        <div>
            <div className="header">     
                <div className="header__left">
                    <img src={img} alt="Logo" className="header__logo" />
                    <span className="header__text">Dextrus Data Market</span>
                </div>
                <div className="header__right">
                    <div className="header__bar">
                        <img src={question} alt="Logo" className="icon__question" />
                        <img src={notification} alt="Logo" className="icon__notification" />
                        <img src={userroles} alt="Logo" className="icon__userroles" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
