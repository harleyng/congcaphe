import React, { Component } from 'react'
import logo from '../../assets/img/logo.png'
import $ from 'jquery'


export default class Header extends Component {
    componentDidMount() {
        $(".dropdown").hover(function() {
            $(".pageContent").css("z-index", "-1");
        }, function() {
            $(".pageContent").css("z-index", "2");
        })
    }
    render() {
        return (
            <nav className="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <ul className="row justify-content-between">
                                <li><a className="menu-item" href=""><span>câu chuyện</span></a></li>
                                <li className="dropdown"><a className="menu-item" href="http://localhost:3000/posts"><span>bảng tin</span></a>
                                    <ul className="dropdown-container">
                                        <li className="drop-item menu-item"><a href=""><span>Cộng</span></a></li>
                                        <li className="drop-item menu-item"><a href=""><span>Tin tức</span></a></li>
                                        <li className="drop-item menu-item"><a href=""><span>Tuyển dụng</span></a></li>
                                        <li className="drop-item menu-item"><a href=""><span>Đó đây</span></a></li>
                                        <li className="drop-item menu-item"><a href=""><span>Pha chế</span></a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="menu-item default"><span className="menu-item">tạp hoá</span></a>
                                    <ul className="dropdown-container">
                                        <li className="drop-item menu-item"><a href="http://localhost:3000/menu"><span>Thực đơn</span></a></li>
                                        <li className="drop-item menu-item"><a href="http://localhost:3000/groceries"><span>Quầy lưu niệm</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 logoCong"><a href=""><img src={logo} alt="logo Cộng"/></a></div>
                        <div className="col-5">
                            <ul className="row justify-content-between">
                                <li className="dropdown"><a className="menu-item" href="http://localhost:3000/career"><span>tuyển dụng</span></a>
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
                    </div>
                </div>
            </nav>
        )
    }
}
