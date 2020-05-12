import React, { Component } from 'react'
import $ from 'jquery'

export default class LoadMore extends Component {
    componentDidUpdate() {    
        $(".item-container").slice(0, 6).show(); 
        if($(".item-container:hidden").length === 0){ 
            $('#load').css("display", "none");
        } else {
            $("#load").click(function(e){ 
                e.preventDefault();
                $(".item-container:hidden").slice(0, 6).slideDown(); 
            });
        }
    }
    render() {
        return (
            <div className="load-container">
                <button id="load" className="btn-block btn-lg btn">Xem Thêm</button>
            </div>
        )
    }
}
