import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import GroceriesCategory from '../../components/shop/GroceriesCategory'

export default class Groceries extends Component {
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
                                <li><a href="/menu">All</a></li>
                                <li><a href="">Quân Phục</a></li>
                                <li><a href="">Sổ Tay</a></li>
                                <li><a href="">Đồ Da</a></li>
                                <li><a href="">Túi Vải</a></li>
                                <li><a href="">Đồ Gốm </a></li>
                                <li><a href="">Cà Phê Đóng Gói</a></li>
                                <li><a href="">Khác</a></li>
                            </ul>
                        </div>
                        <div className="col-8">
                            <GroceriesCategory></GroceriesCategory>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}
