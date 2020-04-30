import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import MessageCategory from '../components/career/MessageCategory'
import JobCategory from '../components/career/JobCategory'
import CareerPhoto from '../assets/img/career-photo.jpg'

export default class Career extends Component {
    render() {
        return (
            <div className="pageContent pt-0">
                <Helmet>
                    <title>Tuyển Dụng</title>
                </Helmet>
                <div className="career-intro-container">
                    <div className="career-intro-content">
                        <div className="career-intro-headline">Cơ hội nghề nghiệp</div>
                        <div className="career-intro-title">TRỞ THÀNH THÀNH VIÊN TRONG GIA ĐÌNH CỘNG CÀPHÊ</div>
                        <div className="jobsViewer">
                            <a href="#jobs"><button> Xem các vị trí tuyển dụng</button></a>
                        </div>
                    </div>
                </div>
                <div className="career-main-content career-container">
                    <div className="companyInfo">
                        <h1>Là Thành Viên Cộng Cà Phê</h1>
                        <p>Cộng hiện có hơn 60 cửa hàng trải dọc khắp Việt Nam và trên thế giới. Với mong muốn khơi dậy trí tưởng tượng và mang đến một trải nghiệm cảm xúc khác biệt về Việt-nam, Cộng đã và đang trở thành hệ thống cửa hàng cà phê sáng tạo và khác biệt nhất dành cho mọi lứa tuổi, mọi màu da và mọi giới tính!</p>
                    </div>
                    <div className="companyMessage">
                        <h1>Thông điệp của Cộng Cà Phê</h1>
                        <div><MessageCategory/></div>
                        
                    </div>
                    <div className="career-photo">
                        <img src={CareerPhoto} alt="Một số ảnh của Cộng"/>
                    </div>
                </div>
                <div className="job-intro-container">
                    <div className="job-intro-content">
                        <h1>CÁC VỊ TRÍ HIỆN TẠI</h1>
                        <p>Chúng tôi tìm kiếm những người bạn thân thiết, gia nhập gia đình Cộng Cà Phê nếu bạn tìm thấy được những giá trị phù hợp với bản thân. Gửi thông tin ứng tuyển cho Cộng ngay hôm nay!</p>
                    </div>
                </div>
                <div id="jobs"><JobCategory/></div>
            </div>
        )
    }
}
