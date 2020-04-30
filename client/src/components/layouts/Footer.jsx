import React, { Component } from 'react'
import facebookLogo from '../../assets/img/facebook-logo.png'
import instagramLogo from '../../assets/img/instagram-logo.png'
import youtubeLogo from '../../assets/img/youtube-logo.png'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="socialContact">
                    <div className="container">
                        <div className="row">
                        <div className="col-6">
                            <div className="footerTitle"><span>KÊNH KẾT NỐI</span></div>
                            <div className="row pl-3 pt-2">
                                <div className="socialLogo" ><a href="http://www.facebook.com/congcaphe"><img src={facebookLogo} alt="social-facebook"/></a></div>
                                <div className="socialLogo" ><a href="http://www.instagram.com/congcaphe"><img src={instagramLogo} alt="social-instagram"/></a></div>
                                <div className="socialLogo" ><a href="https://www.youtube.com/channel/UCPdzE8o7_ExH7Box2WPSEzw"><img src={youtubeLogo} alt="social-youtube"/></a></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="footerTitle"><span>LUÔN CẬP NHẬT</span></div>
                            <div>Về các tin tức đó đây, sản phẩm mới</div>
                            <div className="row pt-2 pl-3">
                                <input className="emailRegister" type="email" placeholder="Email"/>
                                <button className="emailSubmit" type="submit">ĐĂNG KÝ</button>
                            </div>
                            <div className="privacyGuarantee">Chúng tôi tôn trọng quyền riêng tư của bạn</div>
                        </div>   
                        </div>   
                    </div>
                </div>
                <div className="copyRight">
                    <div className="container">
                        <span>©2017 - 2019 CÔNG TY TNHH <b>Cộng CàPhê</b> Mọi quyền được bảo lưu</span>
                    </div>
                </div>
            </div>
        )
    }
}
