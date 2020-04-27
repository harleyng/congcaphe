import React, { Component } from 'react'
import axios from 'axios'
import Item from './Item'

export default class MenuCategory extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        axios
            .get("https://webhooks.mongodb-stitch.com/api/client/v2.0/app/product-eclzj/service/http/incoming_webhook/render-menu-item")
            .then(data => {
                this.setState({ items: data.data })
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
                            <Item
                                // id = {item._id}
                                name = {item.name}
                                desc = {item.description}
                                img_link = {item.img_link}
                                // url = {item.url}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        )
    }
}
