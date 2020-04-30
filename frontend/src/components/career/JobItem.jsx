import React, { Component } from 'react'

export default class MenuItem extends Component {
    render() {
        return (
            <div className="job-container">
                <div className="job-title">
                    <h3>{this.props.job}</h3>
                </div>
                <div className="row job-content">
                    <div className="col-5 job-desc">
                        <a href={this.props.register_link} target="#">{this.props.desc}</a>
                    </div>
                    <div className="col-5 detail">
                        <i class="far fa-clock"></i><span>{this.props.shift}</span>
                        <i class="fas fa-map-marker-alt"></i><span>{this.props.location}</span>
                    </div>
                    <div className="col-2 registerLink">
                        <a href={this.props.register_link} target="#"><button>Ứng tuyển</button></a>
                    </div>
                    
                </div>
            </div>
        )
    }
}
