import React, { Component } from 'react'
import config from '../config/config.json'
import axios from 'axios'

export default class Admin extends Component {
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
    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    handlepriceChange = (event) => {
        this.setState({
            price: event.target.value
        })
    }
    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    handleImgLinkChange = (event) => {
        this.setState({
            img_link: event.target.value
        })
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: config.apiUrl + 'api/menu',
            data: { 
                category: this.state.category,
                name: this.state.name,
                price: this.state.price,
                description: this.state.description,
                img_link: this.state.img_link
            }
        })
    }
    render() {
        return (
            <div className="pageContent container">
                <form>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Category</label>
                        <input onchange={this.handleCategoryChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput">Name</label>
                        <input onchange={this.handleNameChange} type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input placeholder"/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Price</label>
                        <input onchange={this.handlePriceChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Description</label>
                        <input onchange={this.handleDescriptionChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Img_link</label>
                        <input onchange={this.handleImgLinkChange} type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
