import React, { Component } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import config from '../../config/config.json'


export default class MenuDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: '',
            name: '',
            price: '',
            description: '',
            img_link: ''
        }
    }
    componentDidMount() {
        const category = this.props.match.params.category;
        const id = this.props.match.params.id;
        axios
            .get(config.apiUrl + `api/grocery/${category}/${id}`)
            .then(data => {
                const dataApi = data.data.data;

                this.setState({ 
                    category: dataApi.category,
                    name: dataApi.name,
                    price: dataApi.price,
                    description: dataApi.description,
                    img_link: dataApi.img_link
                })
            })
            .catch(err => console.error(err))
    }
    render() {
        return (
            <div className="pageContent">
                <Helmet>
                    <title>{this.state.name}</title>
                </Helmet>
                <div className="detailContainer">
                    <div className="row">
                        <div className="col-6 detail-img">
                            <img src={this.state.img_link} alt={this.state.description}/>
                        </div>
                        <div className="col-6 detail-content">
                            <h3>{this.state.name}</h3>
                            <h5><strong>{this.state.price}</strong></h5>
                            <p dangerouslySetInnerHTML={{__html: this.state.description}}/>
                            <a className="order" href="https://docs.google.com/forms/d/1_8tT4k5hfKVgWGgc66JYx2jrpruH4iRutXWr0zg0z4o/viewform?ts=5c821709&edit_requested=true">
                                <button className="btn">Đặt Mua</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
