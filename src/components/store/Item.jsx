import React, { Component } from 'react'

export default class MenuItem extends Component {
    render() {
        return (
            <div className="item-container">
                <div className="item-img">
                    <a href={this.props.url}>
                        <img src={this.props.img_link} alt={this.props.desc}/>
                    </a>
                </div>
                <div className="item-content">
                    <div className="item-name">{this.props.name}</div>
                </div>
            </div>
        )
    }
}
