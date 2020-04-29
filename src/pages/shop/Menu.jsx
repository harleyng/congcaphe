import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import MenuCategory from '../../components/shop/MenuCategory'

export default class Menu extends Component {
    render() {
        return (
            <div className="pageContainer">
                <Helmet>
                    <title>Tạp Hoá</title>
                </Helmet>
                <div className="container pageContent">
                    <div className="row">
                        <div className="col-4">
                            <ul className="menuList">
                                <li><a href="">All</a></li>
                                <li><a href="">Cà Phê</a></li>
                                <li><a href="">Sinh Tố Cộng Đổi Mới</a></li>
                                <li><a href="">Trà</a></li>
                                <li><a href="">Cà Phê Tây</a></li>
                                <li><a href="">Sinh Tố</a></li>
                                <li><a href="">Đồ Uống Đá Xay</a></li>
                                <li><a href="">Nước Trái Cây</a></li>
                                <li><a href="">Sữa Chua</a></li>
                                <li><a href="">Đồ Uống Khác</a></li>
                                <li><a href="">Đồ Ăn Chơi</a></li>
                            </ul>
                        </div>
                        <div className="col-8">
                            <MenuCategory></MenuCategory>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}
