import React, { Component } from 'react'
import JobItem from './JobItem'

export default class NewsCategory extends Component {
    state = {
        listItems: [
            {
                id: 1,
                job: 'Pha chế',
                desc: 'NHÂN VIÊN PHA CHẾ',
                shift: 'Hà Nội',
                location: 'Hà Nội',
                register_link: 'https://docs.google.com/forms/d/19uY29UgJvez3gttxSI4kDnqTnAFB4RcZfZvhKwxr178/viewform?edit_requested=true'
            },
            {
                id: 2,
                job: 'Thu Ngân',
                desc: 'NHÂN VIÊN THU NGÂN',
                shift: 'Hà Nội',
                location: 'Hà Nội',
                register_link: 'https://docs.google.com/forms/d/19uY29UgJvez3gttxSI4kDnqTnAFB4RcZfZvhKwxr178/viewform?edit_requested=true'
            },
            {
                id: 3,
                job: 'Phục Vụ',
                desc: 'NHÂN VIÊN PHỤC VỤ',
                shift: 'Full-Time / Part-time',
                location: 'Hà Nội',
                register_link: 'https://docs.google.com/forms/d/19uY29UgJvez3gttxSI4kDnqTnAFB4RcZfZvhKwxr178/viewform?edit_requested=true'
            },
        ]
    }
    render() {
        return (
            <div>
                {this.props.children}
                <div className="item">
                    {this.state.listItems.map(item=>(
                        <React.Fragment key = {item.id}>
                            <JobItem
                                id = {item.id}
                                job = {item.job}
                                desc = {item.desc}
                                shift = {item.shift}
                                location = {item.location}
                                register_link = {item.register_link}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        )
    }
}
