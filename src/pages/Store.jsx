import React, { Component } from 'react'
import {Helmet} from 'react-helmet'
import MapMarker from '../assets/img/map-marker.png'

export default class Store extends Component {
    render() {
        return (
            <div classNamee="pageContent py-0">
                <Helmet>
                    <title>Cửa Hàng</title>
                </Helmet>
                <div className="store-container">
                    <div className="store-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d62760411.90977463!2d109.613939!3d16.241425!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1586772714509!5m2!1sen!2sus?wmode=transparent" width="100%" height="800px" frameborder="0" border="none" aria-hidden="false" wmode="Opaque"></iframe>
                    </div>
                    <div className="store-map-table panel">
                        <div className="filter set opened" id="opened">
                            <div className="store-country row mx-0">
                                <img src={MapMarker} width="15" alt="Đánh dấu bản đồ"/>
                                <h5>Việt Nam</h5>
                            </div>
                            <ul>
                                <li><a href="/store/107/bac-ninh"><span className="name">Bắc Ninh</span><span className="store-count"> 1</span></a></li>
                                <li><a href="/store/76/lao-cai"><span className="name">Lào Cai</span><span className="store-count"> 1</span></a></li>
                                <li><a href="/store/71/lang-son"><span className="name">Lạng Sơn</span><span className="store-count"> 1</span></a></li>
                                <li><a href="/store/78/thai-nguyen"><span className="name">Thái Nguyên</span><span className="store-count"> 1</span></a></li>
                                <li><a href="/store/32/ha-noi"><span className="name">Hà Nội</span><span className="store-count"> 32</span></a></li>
                                <li><a href="/store/70/quang-ninh"><span className="name">Quảng Ninh</span><span className="store-count"> 2</span></a></li>
                                <li><a href="/store/77/hai-phong"><span className="name">Hải Phòng</span><span className="store-count"> 1</span></a></li>
                                <li><a href="/store/63/hue"><span className="name">Huế</span><span className="store-count"> 1</span></a></li>
                                <li><a href="/store/73/da-nang"><span className="name">Đà Nẵng</span><span className="store-count"> 3</span></a></li>
                                <li><a href="/store/75/hoi-an"><span className="name">Hội An</span><span className="store-count"> 1</span></a></li>
                                <li><a href="/store/74/nha-trang"><span className="name">Nha Trang</span><span className="store-count"> 1</span></a></li>
                                <li><a href="/store/33/ho-chi-minh"><span className="name">Hồ Chí Minh</span><span className="store-count"> 18</span></a></li>
                            </ul>
                        </div>
                        <div className="filter set opened" id="opened">
                            <div className="store-country row mx-0">
                                <img src={MapMarker} width="15" alt="Đánh dấu bản đồ"/>
                                <h5>Hàn Quốc</h5>
                            </div>
                            <ul>
                                <li><a href="/store/40/seoul"><span className="name">Seoul</span><span className="store-count"> 5</span></a></li>
                                <li><a href="/store/101/gyeonggi"><span className="name">Gyeonggi</span><span className="store-count"> 1</span></a></li>
                            </ul>
                        </div>
                        <div className="set opened" id="opened">
                            <div className="store-country row mx-0">
                                <img src={MapMarker} width="15" alt="Đánh dấu bản đồ"/>
                                <h5>MALAYSIA</h5>
                            </div>
                            <ul>
                                <li><a href="/store/132/kuala-lumpur"><span className="name">Kuala Lumpur</span><span className="store-count"> 1</span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
