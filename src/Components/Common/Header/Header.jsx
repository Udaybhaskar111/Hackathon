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
                <div className="left">
                    <img src={img} alt="Logo" className="logo" />
                    <span className="text">Dextrus Data Market</span>
                </div>
                <div className="right">
                    <div className="bar">
                        <img src={question} alt="Logo" className="question" />
                        <img src={notification} alt="Logo" className="notification" />
                        <img src={userroles} alt="Logo" className="userroles" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
