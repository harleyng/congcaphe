import React, { Component } from 'react'

export default class MenuItem extends Component {
    render() {
        return (
            <div className="career-item-container">
                <div className="career-item-img">
                    <img src={this.props.img_link} alt={this.props.desc}/>
                </div>
                <div className="career-item-content">
                    <div className="career-item-title">{this.props.title}</div>
                    <div className="career-item-desc">{this.props.desc}</div>
                </div>
            </div>
        )
    }
}
