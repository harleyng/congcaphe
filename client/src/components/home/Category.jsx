import React, { Component } from 'react'
import Item from './Item'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

export default class Category extends Component {
    state = {
        listItems: [
            {
                id: 1,
                title: 'Cộng Cà Phê: Ra mắt Bình Giữ Nhiệt và Ca Men "Xanh - Tươi',
                desc: 'Bình Giữ Nhiệt và Ca Men nơi Cộng Cà Phê được lấy cảm hứng từ những vật dụng thiết yếu, dã chiến thời xưa, cộng thêm tiện dụng và đặc biệt thân thiện với môi trường!',
                url: '#',
                img_link: 'https://cong-news.appwifi.com/wp-content/uploads/2020/03/BGNCM-Slide-1.png'
            },
            {
                id: 2,
                title: 'Cộng Cà Phê chính thức mở cửa tại Malaysia',
                desc: 'Ngày 14/11/2019, Cộng Cà Phê tự hào đánh dấu cột mốc tiếp theo, trong hành trình mang ly cà phê Việt Nam đến với bạn bè quốc tế, bằng cửa hàng đầu tiên tại Kuala Lumpur.',
                url: '#',
                img_link: 'https://cong-news.appwifi.com/wp-content/uploads/2019/11/Malaysia-2.jpg'
            },
            {
                id: 3,
                title: 'Sài Gòn: Tích điểm - Nhận ưu đãi với Thẻ Thân Thiết phiên bản mới!',
                desc: 'Mong muốn gửi lời tri ân và mang đến cho khách hàng những trải nghiệm trọn vẹn nhất, Cộng Cà Phê tiếp tục nâng cấp Thẻ Thân Thiết với nhiều mức ưu đãi hấp dẫn.',
                url: '#',
                img_link: 'https://cong-news.appwifi.com/wp-content/uploads/2019/07/IMG_0420_1562122477.jpg'
            },
        ]
    }
    render() {
        return (
            <div className="items">
                <AliceCarousel
                    items = {this.state.listItems.map(item=>(
                        <React.Fragment key = {item.id}> 
                            <Item
                                id = {item.id}
                                title = {item.title}
                                desc = {item.desc}
                                img_link = {item.img_link}
                                url = {item.url}
                            />
                        </React.Fragment>
                    ))}
                    autoPlayInterval = {2000}
                    autoPlay = {true}
                    dotsDisabled={true}
                    buttonsDisabled={true}
                    ref={(el) => (this.Carousel = el)}
                />
                <button className="slider-button prevbutton" onClick={() => this.Carousel.slidePrev()}><i class="fas fa-chevron-left"></i></button>
                <button className="slider-button nextbutton" onClick={() => this.Carousel.slideNext()}><i class="fas fa-chevron-right"></i></button>
            </div>
        )
    }
}
// ReactDOM.render(<Category />, document.querySelector('.demo-carousel'));