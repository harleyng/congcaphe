import React, { Component } from 'react'
import {Helmet} from 'react-helmet';
import Category from '../../components/posts/Category'
import logo from '../../assets/img/logo.png'
import $ from 'jquery'
import {setAttributes} from './setAttributes'
var nodemailer = require('nodemailer');

export default class News extends Component {
        // sendMail() {
        //     let mail = $('#registeredEmail');
        //     let protocol = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail.value);
        //     if (!mail.value) {
        //         setAttributes(mail, {"data-toogle": "tooltip", "title": "You have entered nothing"});
        //     } else {
        //         if (protocol == false) {
        //             setAttributes(mail, {"data-toogle": "tooltip", "title": "You have entered invalid email"});
        //         } else {
        //         var transporter = nodemailer.createTransport({
        //             service: 'gmail',
        //             auth: {
        //             user: 'harley.ngx@gmail.com',
        //             pass: 'yourpassword'
        //             }
        //         });
                
        //         var mailOptions = {
        //             from: 'harley.ngx@gmail.com',
        //             to: mail,
        //             subject: 'You have registered to follow Cong',
        //             text: 'Enjoy coffee'
        //         };
                
        //         transporter.sendMail(mailOptions, function(error, info){
        //             if (error) {
        //             error);
        //             } else {
        //             console.log('Email sent: ' + info.response);
        //             }
        //         });
        //     }
        // }
    
    render() {
        return (
            <div className="page Container">
                <Helmet>
                    <title>Tin Tức</title>
                </Helmet>
                <div className="container pageContent">
                    <div className="row">
                        <div className="col-8">
                            <Category/>
                        </div>
                        <div className="col-4">
                            <div className="followPosts">
                                <div className="followPosts-title">ĐĂNG KÝ THEO DÕI</div>
                                <div><img src={logo} alt="logo Cộng"/></div>
                                <div className="followPosts-desc"><p>Nhận những thông tin mới nhất từ Cộng Cà Phê.</p></div>
                                <div className="emailRegister-posts-container">
                                    <input id="registeredEmail" className="emailRegister emailRegister-posts" type="email" placeholder="Nhập địa chỉ email"/>
                                    <button className="emailSubmit emailSubmit-posts" onClick={this.sendMail} type="submit">ĐĂNG KÝ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
