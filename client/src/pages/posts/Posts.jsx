import React, { Component } from 'react'
import {Helmet} from 'react-helmet';
import axios from 'axios'
import config from '../../config/config.json'
import Item from '../../components/posts/Item'
import logo from '../../assets/img/logo.png'
import LoadMore from '../../components/LoadMore';
// import $ from 'jquery'
// import {setAttributes} from './setAttributes'
// var nodemailer = require('nodemailer');

export default class News extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
    }
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
    
    componentDidMount() {
        const category = this.props.match.params.category;
        axios
            .get(config.apiUrl + `api/post/${category}`)
            .then(data => {
                const dataApi = data.data.data;
                this.setState({ items: dataApi })
            })
    }
    render() {
        return (
            <div className="page Container">
                <Helmet>
                    <title>Tin Tức</title>
                </Helmet>
                <div className="container pageContent">
                    <div className="row">
                        <div className="col-8">
                            <div className="items">
                                {this.state.items.map(item=>(
                                    <React.Fragment key = {item.id}>
                                        <Item
                                            id = {item.id}
                                            title = {item.title}
                                            description = {item.description}
                                            img_link = {item.img_link}
                                            url = {item.url}
                                        />
                                    </React.Fragment>
                                ))}
                            </div>
                            <LoadMore/>
                        </div>
                        <div className="col-4">
                            <div className="followPosts">
                                <div className="followPosts-title">ĐĂNG KÝ THEO DÕI</div>
                                <div><img src={logo} alt="logo Cộng"/></div>
                                <div className="followPosts-desc"><p>Nhận những thông tin mới nhất từ Cộng Cà Phê.</p></div>
                                <div className="emailRegister-posts-container row m-0">
                                    <input id="registeredEmail" className="col-8 emailRegister emailRegister-posts m-0" type="email" placeholder="Nhập địa chỉ email"/>
                                    <button className="col-4 emailSubmit emailSubmit-posts m-0" type="submit">ĐĂNG KÝ</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
