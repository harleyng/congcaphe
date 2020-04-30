import React, { Component } from 'react'
import Category from '../components/home/Category'

export default class Home extends Component {
    render() {
        return (
            <div className="pageContent py-0">
                <div className="slider">
                    <Category/>
                </div>
                <div className="pages-intro">
                    <div className="banner banner1">
                        <a href="/about">
                            <span>câu chuyện cộng</span>
                        </a>
                    </div>
                    <div className="row mx-0 banner banner2 justify-content-between">
                        <div className="col-6 banner2-container pl-0">
                            <div className="banner2-content banner2-left">
                                <a href="/posts/bartender">
                                    <span>pha chế</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-6 banner2-container pr-0">
                            <div className="banner2-content banner2-right">
                                <a href="/posts/groceries">
                                    <span>tạp hoá</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="banner banner3">
                        <a href="#">
                            <span>tin tức nổi bật</span>
                            <p className="mb-0 mt-3">"Lao động hăng say, tình hay sẽ đến", Cộng chúc bạn một ngày&nbsp;mới thật nhiều năng lượng để hoàn thành công việc thật tốt!</p>
                        </a>
                    </div>
                    <div className="banner banner4">
                        <a href="/career">
                            <span>tuyển dụng</span>
                            <p className="mb-0 mt-3">Gia nhập gia đình Cộng ngay hôm nay.<br/>Đọc thông tin tại đây để biết thêm chi tiết.<br/>Cộng nhiệt liệt chào mừng.</p>
                        </a>
                    </div>
                    <div className="pages-intro-more">
                        <ul className="row">
                            <li className="col-3">
                                <span>tin tức</span>
                                <p>về chúng tôi</p>
                            </li>
                            <li className="col-3">
                                <span>cửa hàng</span>
                                <p>danh sách cửa hàng</p>
                            </li>
                            <li className="col-3">
                                <span>đồ uống</span>
                                <p>hôm nay cộng có</p>
                            </li>
                            <li className="col-3">
                                <span>hợp tác</span>
                                <p>liên hệ với chúng tôi</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
