import React, { Component } from 'react'
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from '../../components/layouts/Header';
import Footer from '../../components/layouts/Footer'

export default class MasterLayout extends Component {
    render() {
        return (
            <div>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}
