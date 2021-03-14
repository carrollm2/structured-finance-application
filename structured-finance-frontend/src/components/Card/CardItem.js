import React from 'react'
import {Link} from 'react-router-dom'
import './Cards.css'

function CardItem(props){
    return (
        <>
            <div className="cards__item">
              <Link className="cards__item__link" to={props.path}>
                <div className="cards_items_info">
                    <br></br>
                    <br></br>
                    <h5 className="cards__item__text">{props.text}</h5>
                    <br></br>
                    <br></br>
                    <i className={props.icon}></i>
                    <br></br>
                    <br></br>
                    <p className={props.label}>{props.label}</p>
                    <br></br>
                    <br></br>
                </div>
              </Link>
            </div>
        </>
    )
}

export default CardItem;