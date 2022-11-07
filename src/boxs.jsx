import React from "react";
import './house.css'
import { FaBed } from 'react-icons/fa'
import { FaCarAlt } from 'react-icons/fa'
import { FaBath } from 'react-icons/fa'
import { FaRulerCombined } from 'react-icons/fa'
import { FaExpandAlt } from 'react-icons/fa'
import { FaRegHeart } from 'react-icons/fa'


class Box extends React.Component {
    render() {
        return (
            <div className="container">
                <img className="img" src={this.props.src} alt="" />
                <button className="btn1">FEATURES</button>
                <button className="btn2">FOR SALE</button>
                <h3 className="title">{this.props?.title}</h3>
                <p className="title2">{this.props?.title2}</p>
                <div className="icons">
                    <div className="icon1">
                        <FaBed className="bed" />
                        <p>{this.props.FaBed}</p>
                    </div>
                    <div className="icon2">
                        <FaCarAlt className="car" />
                        <p>{this.props.FaCarAlt}</p>
                    </div>
                    <div className="icon3">
                        <FaBath className="bath" />
                        <p>{this.props.FaBath}</p>
                    </div>
                    <div className="icon4">
                        <FaRulerCombined className="ruler" />
                        <p>{this.props.FaRulerCombined}</p>
                    </div>
                </div>
                <hr />
                <span className="title3">{this.props?.title3}</span>
                <p className="title4">{this.props?.title4}</p>
                <div className="bottomicons">
                    <FaExpandAlt className='alt'></FaExpandAlt>
                    <FaRegHeart className='yurak'></FaRegHeart>
                </div>

            </div>

        )
    }
}
// btnyurak.addEventListener('click', () => btnyurak.style.backgroundColor='red')


export default Box
