import React, { Component } from 'react'
import Item from './Item'

export default class GroceriesCategory extends Component {
    state = {
        listItems: [
            {
                id: 1,
                name: 'Hộp Quà Niềm Vui',
                price: '500,00',
                desc: 'Gồm 5 món quà giới hạn, chỉ có duy nhất trong Hộp quà Canh Tý từ Cộng Cà Phê. Sản phẩm chỉ bán tại website.',
                url: '',
                img_link: 'https://cong-news.appwifi.com/wp-content/uploads/2019/12/Hop-qua-2-JPG.jpg'
            },
            {
                id: 2,
                name: 'TÚI VẢI TO-TE',
                price: '55,000',
                desc: '- Vừa bền, vừa đẹp, lại đa-di-năng - Kèm khoá bấm an toàn, bảo mật - Túi 3 gang... tay, mang đi mà đựng... niềm vui!',
                url: '',
                img_link: 'https://cong-news.appwifi.com/wp-content/uploads/2019/12/Tui-vai.jpg'
            },
            {
                id: 3,
                name: 'LÌ-XÌ CANH TÝ',
                price: '20,000',
                desc: '- Đóng gói 12 chiếc - Lấy cảm hứng từ những khung cảnh, hình ảnh thân thuộc một thời như loa phường, tiệm cho thuê truyện...',
                url: '',
                img_link: 'https://cong-news.appwifi.com/wp-content/uploads/2019/12/LN-LX2020.jpeg'
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
                                name = {item.name}
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
