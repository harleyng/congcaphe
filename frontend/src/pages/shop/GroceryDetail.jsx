import React, { Component } from 'react'
import axios from 'axios'
import { Helmet } from 'react-helmet'
import config from '../../config.json'


export default class MenuDetail extends Component {
    state = {
        category: '',
        name: '',
        price: '',
        description: '',
        img_link: ''
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        axios
            .get(config.rootApi + `grocery/${id}`)
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
