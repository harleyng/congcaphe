import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className="item-container">
                <div className="item-img">
                    <a href={this.props.url}>
                        <img className="test" src={this.props.img_link} alt={this.props.desc}/>
                    </a>
                </div>
                <div className="item-content">
                    {this.props.name}
                </div>
            </div>
        )
    }
}
