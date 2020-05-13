import React, { Component } from 'react'
import MessageItem from './MessageItem'

export default class NewsCategory extends Component {
    state = {
        listItems: [
            {
                id: 1,
                title: 'GIÁ TRỊ CỐT LÕI',
                desc: 'Thành thật và ấm áp. Sáng tạo và khác biệt. Tiêu chuẩn cao và tỉ mỉ trong mọi chi tiết. Theo đuổi mục tiêu và lý tưởng chung.',
                img_link: 'https://i.ibb.co/hRjYg0t/message-1.jpg'
            },
            {
                id: 2,
                title: 'SỨ MỆNH CỦA CỘNG',
                desc: 'Khơi dậy trí tưởng tượng và mang đến một trải nghiệm cảm xúc khác biệt về Việt Nam.',
                img_link: 'https://i.ibb.co/GJ20Qzh/message-2.jpg'
            },
            {
                id: 3,
                title: 'TẦM NHÌN',
                desc: 'Trở thành hệ thống cửa hàng cà phê sáng tạo và khác biệt nhất.',
                img_link: 'https://i.ibb.co/zHD7hkW/message-3.jpg'
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
                            <MessageItem
                                id = {item.id}
                                title = {item.title}
                                desc = {item.desc}
                                img_link = {item.img_link}
                            />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        )
    }
}
