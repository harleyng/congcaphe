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
        console.log(this.props)
        axios
            .get(config.apiUrl + `api/menu/${category}/${id}`)
            .then(data => {
                const dataApi = data.data.data;
                // console.log(dataApi.category)
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
                            <h5><strong dangerouslySetInnerHTML={{__html: this.state.price}}/></h5>
                            <p>{this.state.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
