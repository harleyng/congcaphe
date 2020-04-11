import React, { Component } from 'react'
import NewsCategory from '../../components/posts/NewsCategory'
import logo from '../../assets/img/logo.png'

export default class News extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <NewsCategory/>
                    </div>
                    <div className="col-4">
                        <div className="followPosts">
                            <div className="followPosts-title">ĐĂNG KÝ THEO DÕI</div>
                            <div><img src={logo} alt="logo Cộng"/></div>
                            <div className="followPosts-desc"><p>Nhận những thông tin mới nhất từ Cộng Cà Phê.</p></div>
                            <div className="emailRegister-posts-container">
                                <input className="emailRegister emailRegister-posts" type="email" placeholder="Nhập địa chỉ email"/>
                                <button className="emailSubmit emailSubmit-posts" type="submit">ĐĂNG KÝ</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
