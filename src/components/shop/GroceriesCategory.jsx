import React, { Component } from 'react'
import config from '../../config.json'
import GroceryItem from './GroceryItem'
import axios from 'axios'

export default class GroceriesCategory extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        axios
            .get(config.rootApi + "grocery")
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
                            <GroceryItem
                                id = {item._id}
                                name = {item.name}
                                desc = {item.desc}
                                img_link = {item.img_link}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        )
    }
}
