/* eslint-disable react/jsx-key */
import React from "react"
import { CardComponent } from "../Common/CardComponent/CardComponent"
import './AllCards.scss'
export const AllCards=()=>{
    const allCards=["","","","",""]
    return(
        <div className="dataProducts" >
            <div className="allCards">
                {
                    allCards.map(each=>(
                        <CardComponent />
                    ))
                }
            </div>
        </div>
    )
}