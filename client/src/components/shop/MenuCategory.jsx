import React, { Component } from 'react'
import axios from 'axios'
import config from '../../config.json'
import MenuItem from './MenuItem'

export default class MenuCategory extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        axios
            .get(config.baseUrl + "api/menu")
            .then(data => {
                const dataApi = data.data.data;
                this.setState({ items: dataApi })
            })
            .catch(err => console.error(err))
    }
    render() {
        return (
            <div> 
                {this.props.children}
                <div className="item">
                    {this.state.items.map(item=>(
                        <React.Fragment key = {item._id}>
                            <MenuItem
                                id = {item._id}
                                name = {item.name}
                                desc = {item.description}
                                img_link = {item.img_link}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        )
    }
}
