/* eslint-disable react/jsx-key */
import React from "react";
import { CardComponent } from "../Common/CardComponent/CardComponent";
import './AllCards.scss';
import { useState } from "react";
import { useEffect } from "react";
import axios from 'axios'
import {  axiosInstance } from "../../Services/Axios";
export const AllCards=()=>{
    const [cards,setCards]=useState([]);
   
    useEffect(() => {
        axiosInstance.get('/justice-leagues').then(res=>{
            setCards(res.data.data)
        });
    }, []);

    return(
        <div className="dataProducts" >
            <div className="allCards">
                {
                    cards.map((each,index)=>(
                        <CardComponent data={each}/>
                    ))
                }
            </div>
        </div>
    )
}