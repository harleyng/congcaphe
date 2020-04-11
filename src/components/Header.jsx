import React, { Component } from 'react'
import logo from '../assets/img/logo.png'


export default class Header extends Component {
    render() {
        return (
            <nav className="menu">
                <div className="container">
                    <ul className="row justify-content-between">
                        <li><a className="menu-item" href=""><span>câu chuyện</span></a></li>
                        <li className="dropdown"><a className="menu-item" href=""><span>bảng tin</span></a>
                            <ul className="dropdown-container">
                                <li className="drop-item menu-item"><a href=""><span>Cộng</span></a></li>
                                <li className="drop-item menu-item"><a href=""><span>Tin tức</span></a></li>
                                <li className="drop-item menu-item"><a href=""><span>Tuyển dụng</span></a></li>
                                <li className="drop-item menu-item"><a href=""><span>Đó đây</span></a></li>
                                <li className="drop-item menu-item"><a href=""><span>Pha chế</span></a></li>
                            </ul>
                        </li>
                        <li className="dropdown"><a className="menu-item" href=""><span>tạp hoá</span></a>
                            <ul className="dropdown-container">
                                <li className="drop-item menu-item"><a href=""><span>Thực đơn</span></a></li>
                                <li className="drop-item menu-item"><a href=""><span>Quầy lưu niệm</span></a></li>
                            </ul>
                        </li>
                        <li><a href=""><img className="logoCong" src={logo} alt="logo Cộng"/></a></li>
                        <li className="dropdown"><a className="menu-item" href=""><span>tuyển dụng</span></a>
                            <ul className="dropdown-container">
                                <li className="drop-item menu-item"><a href=""><span>Ứng tuyển</span></a></li>
                            </ul>
                        </li>
                        <li><a className="menu-item" href=""><span>cửa hàng</span></a></li>
                        <li className="dropdown"><a className="menu-item" href=""><span>liên hệ</span></a>
                            <ul className="dropdown-container">
                                <li className="drop-item menu-item"><a href=""><span>Cộng lắng nghe</span></a></li>
                                <li className="drop-item menu-item"><a href=""><span>Hợp tác</span></a></li>
                                <li className="drop-item menu-item"><a href=""><span>Về chúng tôi</span></a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
