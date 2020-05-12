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
                                <li><a className="menu-item" href="/about"><span>câu chuyện</span></a></li>
                                <li className="dropdown"><a className="menu-item" href="/posts/all"><span>bảng tin</span></a>
                                    <ul className="dropdown-container">
                                        <li className="drop-item menu-item"><a href="/posts/all"><span>Cộng</span></a></li>
                                        <li className="drop-item menu-item"><a href="/posts/news"><span>Tin tức</span></a></li>
                                        <li className="drop-item menu-item"><a href="/posts/hiring"><span>Tuyển dụng</span></a></li>
                                        <li className="drop-item menu-item"><a href="/posts/culture"><span>Đó đây</span></a></li>
                                        <li className="drop-item menu-item"><a href="/posts/bartender"><span>Pha chế</span></a></li>
                                    </ul>
                                </li>
                                <li className="dropdown"><a className="menu-item default" href="/menu/all"><span className="menu-item">tạp hoá</span></a>
                                    <ul className="dropdown-container">
                                        <li className="drop-item menu-item"><a href="/menu/all"><span>Thực đơn</span></a></li>
                                        <li className="drop-item menu-item"><a href="/grocery/all"><span>Quầy lưu niệm</span></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-2 logoCong"><a href="/"><img src={logo} alt="logo Cộng"/></a></div>
                        <div className="col-5">
                            <ul className="row justify-content-between">
                                <li className="dropdown"><a className="menu-item" href="/career"><span>tuyển dụng</span></a>
                                    <ul className="dropdown-container">
                                        <li className="drop-item menu-item"><a href="https://docs.google.com/forms/d/19uY29UgJvez3gttxSI4kDnqTnAFB4RcZfZvhKwxr178/viewform?edit_requested=true"><span>Ứng tuyển</span></a></li>
                                    </ul>
                                </li>
                                <li><a className="menu-item" href="/store"><span>cửa hàng</span></a></li>
                                <li className="dropdown"><a className="menu-item" href="/contact"><span>liên hệ</span></a>
                                    <ul className="dropdown-container">
                                        <li className="drop-item menu-item"><a href="https://docs.google.com/forms/d/e/1FAIpQLSfztjxkPcFSeHBwkAEcXZ0hEPitFNTegLaXQL5dEZ2b86-z2A/viewform"><span>Cộng lắng nghe</span></a></li>
                                        <li className="drop-item menu-item"><a href="/collab"><span>Hợp tác</span></a></li>
                                        <li className="drop-item menu-item"><a href="/contact"><span>Về chúng tôi</span></a></li>
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
