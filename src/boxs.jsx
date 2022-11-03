import React from "react";
import './house.css'

class Box extends React.Component {
    render() {
        return (
            <div className="container">
                <img className="img" src={this.props.src} alt="" />
                <button className="btn1">FEATURES</button>
                <button className="btn2">FOR SALE</button>
                <h3 className="title">{this.props?.title}</h3>
                <p className="title2">{this.props?.title2}</p>
                <hr />
                <span className="title3">{this.props?.title3}</span>
                <p className="title4">{this.props?.title4}</p>
            </div>

        )
    }
}

export default Box