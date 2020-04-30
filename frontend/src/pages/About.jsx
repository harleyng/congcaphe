import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import AboutImage from '../assets/img/DSC9877.jpg'

export default class About extends Component {
    render() {
        return (
            <div className="pageContent">
                <div className="about-container">
                    <Helmet>
                        <title>Câu Chuyện</title>
                    </Helmet>
                    <div className="about-title">
                        <span>CÂU CHUYỆN</span>
                    </div>
                    <div className="about-image">
                        <img src={AboutImage} alt="Không gian Cộng"/>
                    </div>
                    <div className="about-content">
                        <p>Câu chuyện Cộng bắt đầu vào năm 2007. Cửa hàng đầu tiên là một tiệm giải khát nhỏ trên con phố cà phê lâu đời tại Hà Nội – phố Triệu Việt Vương. </p>
                        <p>Cộng đơn giản được lấy cảm hứng từ chữ cái đầu tiên trong câu Quốc hiệu:  <br/>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM </p>
                        <p>Sứ mệnh của chúng tôi là khơi dậy trí tưởng tượng và mang đến cho khách hàng những trải nghiệm cảm xúc khác biệt về Việt Nam. </p> 
                        <p>Chúng tôi đang không ngừng sáng tạo với mục tiêu là tiến xa hơn để mang Cộng đến với thế giới; lan toả và truyền cảm hứng khác biệt bằng trái tim của mỗi thành viên.</p>
                    </div>
                </div>
            </div>
        )
    }
}
