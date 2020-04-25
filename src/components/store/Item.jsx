import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Item extends Component {
    render() {
        const url = `/product/${this.props.id}`;
        return (
            <div className="item-container">
                <div className="item-img">
                    {/* <Link to={url}> */}
                        <img src={this.props.img_link} alt={this.props.desc}/>
                    {/* </Link> */}
                </div>
                <div className="item-content">
                    <div className="item-name">{this.props.name}</div>
                </div>
            </div>
        )
    }
}
