import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import axios from 'axios'
import config from '../../config/config.json'
import MenuItem from '../../components/shop/MenuItem'
import LoadMore from '../../components/LoadMore'

export default class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
    componentDidMount() {
        const category = this.props.match.params.category;
        axios
            .get(config.apiUrl + `api/menu/${category}`)
            .then(data => {
                const dataApi = data.data.data;
                this.setState({ items: dataApi })
            })
            .catch(err => console.error(err))
    }
    render() {
        return (
            <div className="pageContainer">
                <Helmet>
                    <title>Tạp Hoá</title>
                </Helmet>
                <div className="container pageContent">
                    <div className="row">
                        <div className="col-4">
                        <   ul className="menuList">
                                <li><a href="/menu/all">All</a></li>
                                <li><a href="/menu/coffee">Cà Phê</a></li>
                                <li><a href="/menu/new-smoothie">Sinh Tố Cộng Đổi Mới</a></li>
                                <li><a href="/menu/tea">Trà</a></li>
                                <li><a href="/menu/foreign-coffee">Cà Phê Tây</a></li>
                                <li><a href="/menu/smoothie">Sinh Tố</a></li>
                                <li><a href="/menu/ice-blended">Đồ Uống Đá Xay</a></li>
                                <li><a href="/menu/juice">Nước Trái Cây</a></li>
                                <li><a href="/menu/yogurt">Sữa Chua</a></li>
                                <li><a href="/menu/else">Đồ Uống Khác</a></li>
                                <li><a href="/menu/snack">Đồ Ăn Chơi</a></li>
                            </ul>
                        </div>
                        <div className="col-8">
                            <div className="items">
                                {this.state.items.map(item=>(
                                    <React.Fragment key = {item._id}>
                                        <MenuItem
                                            id = {item._id}
                                            category = {item.category}
                                            name = {item.name}
                                            desc = {item.description}
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
