import React, { Component } from 'react'
import Item from './Item'

export default class NewsCategory extends Component {
    state = {
        listItems: [
            {
                id: 1,
                title: 'Cộng Cà Phê: Đồ Sứ',
                desc: 'Được chế tác riêng bởi làng nghề Bát Tràng, những sản phẩm sứ tại Cộng được tráng men bóng đẹp, thể hiện xuất sắc tinh thần truyền thống đặc trưng của Việt Nam trong từng đường nét, dáng hình.',
                url: '',
                img_link: 'https://cong-news.appwifi.com/wp-content/uploads/2020/04/ảnh-group-ceramic.png'
            },
            {
                id: 2,
                title: 'Cộng Cà Phê: Đồ Vải',
                desc: 'Cộng sử dụng chất liệu vải kaki, vải thô, vải cotton và màu xanh bộ đội cho các sản phẩm: quần bộ đội, áo trấn thủ, mũ,… Từ kiểu dáng, hoạ tiết, đường may đều gợi nhớ đến hình ảnh anh bộ đội cụ Hồ và tinh thần thời bao cấp - nét đặc trưng của Cộng.',
                url: '',
                img_link: 'https://cong-news.appwifi.com/wp-content/uploads/2020/04/ảnh-group-clothing.png'
            },
            {
                id: 3,
                title: 'Cộng Cà Phê: Đồ Giấy',
                desc: 'Giấy kraft, vốn quen thuộc với người dân Việt Nam với cái tên “Giấy xi măng”, được Cộng lựa chọn làm nguyên liệu chính cho các sản phẩm của mình: sổ tay, postcard, bao thư, lì xì...',
                url: '',
                img_link: 'https://cong-news.appwifi.com/wp-content/uploads/2020/04/sổ-group-pic.png'
            },
        ]
    }
    render() {
        return (
            <div>
                {this.props.children}
                <div className="item">
                    {this.state.listItems.map(item=>(
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
                </div>
            </div>
        )
    }
}
