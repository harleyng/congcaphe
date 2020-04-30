import React, { Component } from 'react'
import MessageItem from './MessageItem'

export default class NewsCategory extends Component {
    state = {
        listItems: [
            {
                id: 1,
                title: 'GIÁ TRỊ CỐT LÕI',
                desc: 'Thành thật và ấm áp. Sáng tạo và khác biệt. Tiêu chuẩn cao và tỉ mỉ trong mọi chi tiết. Theo đuổi mục tiêu và lý tưởng chung.',
                img_link: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-9/93476987_10213287322295995_5889150291739148288_o.jpg?_nc_cat=104&_nc_sid=8024bb&_nc_ohc=JvtJQJ_JAvgAX8bC3-w&_nc_ht=scontent.fhan5-4.fna&oh=62047aa989c3ee0781d0c9b84875b1b1&oe=5EBA2502'
            },
            {
                id: 2,
                title: 'SỨ MỆNH CỦA CỘNG',
                desc: 'Khơi dậy trí tưởng tượng và mang đến một trải nghiệm cảm xúc khác biệt về Việt Nam.',
                img_link: 'https://scontent.fhan5-1.fna.fbcdn.net/v/t1.0-9/92699910_10213287322415998_3085483503056322560_o.jpg?_nc_cat=109&_nc_sid=8024bb&_nc_ohc=VKdZOShwDDMAX-8YWLm&_nc_ht=scontent.fhan5-1.fna&oh=e114e7c843083b828951db8bce31145b&oe=5EB6FAD8'
            },
            {
                id: 3,
                title: 'TẦM NHÌN',
                desc: 'Trở thành hệ thống cửa hàng cà phê sáng tạo và khác biệt nhất.',
                img_link: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/93520854_10213287322015988_1047261542438928384_o.jpg?_nc_cat=110&_nc_sid=8024bb&_nc_ohc=WwOdC_J8l8EAX97vs_r&_nc_ht=scontent.fhan5-2.fna&oh=e6034284e0c8e464cc73f3205ed85e05&oe=5EB9E8AE'
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
