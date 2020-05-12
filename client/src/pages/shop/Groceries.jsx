import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import axios from 'axios'
import config from '../../config/config.json'
import GroceryItem from '../../components/shop/GroceryItem'
import LoadMore from '../../components/LoadMore'

export default class Groceries extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        const category = this.props.match.params.category;
        axios
            .get(config.apiUrl + `api/grocery/${category}`)
            .then(data => {
                const dataApi = data.data.data;
                this.setState({ items: dataApi })
            })
    }
    render() {
        return (
            <div className="pageContainer">
                <Helmet>
                    <title>Quầy Lưu Niệm</title>
                </Helmet>
                <div className="container pageContent">
                    <div className="row">
                        <div className="col-4">
                            <ul className="menuList">
                                <li><a href="/grocery/all">All</a></li>
                                <li><a href="/grocery/clothes">Quân Phục</a></li>
                                <li><a href="/grocery/notebook">Sổ Tay</a></li>
                                <li><a href="/grocery/leather">Đồ Da</a></li>
                                <li><a href="/grocery/tote">Túi Vải</a></li>
                                <li><a href="/grocery/pottery">Đồ Gốm </a></li>
                                <li><a href="/grocery/packed-coffee">Cà Phê Đóng Gói</a></li>
                                <li><a href="/grocery/else">Khác</a></li>
                            </ul>
                        </div>
                        <div className="col-8">
                            <div className="items">
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
                                <LoadMore/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}
