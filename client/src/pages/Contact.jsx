import React, { Component } from 'react'
import {Helmet} from 'react-helmet'

export default class Contact extends Component {
    render() {
        return (
            <div className="pageContent">
                <Helmet>
                    <title>Liên Hệ</title>
                </Helmet>
                <div className="recruitmentContact">
                    <div className="pageTitle contact-title">
                        <h2 className="tilte">CONTACT US</h2>
                    </div>
                    <div className="bannerCover">
                        <div className="hero-text"></div>
                    </div>
                    <div className="contact-detail">
                        <div className="contact-list">
                            <ul>
                                <li>
                                    <a className="contact-title">PRESS INQUIRIES AND GENERAL QUESTIONS</a>
                                    <p>info@congcaphe.com</p>
                                </li>
                                <li>
                                    <a className="contact-title">PR &amp; MARKETING INQUIRIES</a>
                                    <p>cmo@congcaphe.com</p>
                                </li>
                                <li>
                                    <a className="contact-title">BUSINESS PARTNERSHIP INQUIRIES</a>
                                    <p>fr@congcaphe.com</p>
                                </li>
                                <li>
                                    <a className="contact-title">INTERNATIONAL BUSINESS PARTNERSHIP INQUIRIES</a>
                                    <p>fr.intl@congcaphe.com</p>
                                </li>
                                <li>
                                    <a className="contact-title">TÌM HIỂU THÔNG TIN NHƯỢNG QUYỀN</a>
                                </li>
                            </ul>
                        </div>
                        <div className="companyAddress">
                            <h5>Our Office</h5>
                            <h6 className="contact-title">ADDRESS</h6>
                            <p>Cong Caphe <br/>94 Lang Street, Dong Da District, Ha Noi, 10000<br/><br/></p>
                            <h6 className="contact-title">OFFICE PHONE</h6>
                            <p><a href="tel:02437339966">(+84) 24 37339966</a></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
