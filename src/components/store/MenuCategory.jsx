import React, { Component } from 'react'
import Item from './Item'

export default class MenuCategory extends Component {
    state = {
        listItems: [
            {
                id: 1,
                name: 'VINACANO',
                price: {
                    hot: '25,000',
                    cold: '29000'
                },
                desc: 'Vinacano - Vietnamese Americano - sự biến tấu đầy sáng tạo của Americano cùng cà phê pha phin Việt Nam, tạo nên thức uống thơm hương đậm vị, vừa hiện đại vừa mang đậm tinh thần truyền thống của dân tộc.',
                img_link: 'https://cong-news.appwifi.com/wp-content/uploads/2019/04/vinacanoda.jpg'
            },
            {
                id: 2,
                name: 'CÀ PHÊ NÂU',
                price: '35,000',
                desc: 'Bạn sẽ chẳng thể tìm được ở đâu khác ngoài Việt Nam một ly Cà Phê Nâu - sự kết hợp kỳ lạ mà hoàn hảo giữa cà phê đen đắng và một chút sữa đặc béo ngọt.',
                img_link: 'https://cong-news.appwifi.com/wp-content/uploads/2019/03/caphenauda.jpg'
            },
            {
                id: 3,
                name: 'CÀ PHÊ SỮA TƯƠI',
                price: {
                    hot: '35,000',
                    cold: '39,000'
                },
                desc: 'Bản hòa tấu nhịp nhàng giữa cà phê nguyên chất và sữa tươi dịu ngọt đem đến thức uống đầy quyến rũ và tinh tế.',
                img_link: 'https://cong-news.appwifi.com/wp-content/uploads/2019/03/caphesuatuoida.jpg'
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
