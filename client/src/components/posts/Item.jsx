import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        return (
            <div className="item-container post-item-container">
                <div className="row">
                    <div className="post-item-img col-5 p-0">
                        <a href={this.props.url}>
                            <img src={this.props.img_link} alt={this.props.description}/>
                        </a>
                    </div>
                    <div className="item-content col-7">
                        <div className="item-title">{this.props.title}</div>
                        <div className="item-desc">{this.props.description}</div>
                    </div>
                </div>
            </div>
        )
    }
}
