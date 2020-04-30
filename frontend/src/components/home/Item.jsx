import React, { Component } from 'react'
import $ from 'jquery'

export default class Item extends Component {
    componentDidMount() {
        var height = $('.slider-content').css("height");
        $('.slider-content').css("bottom", height);
    }
    render() {
        return (
            <div className="slider-container">
                <a className="slider-img" href={this.props.url}>
                    <img src={this.props.img_link} alt={this.props.desc}/>
                </a>
                <div className="slider-content">
                    <div className="slider-title">{this.props.title}</div>
                    <div className="slider-desc">{this.props.desc}
                    <div className="slider-more-container">
                        <a className="slider-more" href={this.props.url}>Xem thêm</a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
