import React, { Component } from 'react'
import $ from 'jquery'

export default class LoadMore extends Component {
    // const [visible, setVisible] = useState(false);
    componentDidUpdate() {    
    $(".item-container").slice(0, 6).show(); 
    $("#load").click(function(e){ 
        e.preventDefault();
        $(".item-container:hidden").slice(0, 6).slideDown(); 
        if($(".item-container:hidden").length === 0){ 
            $('#load').css("display", "none");
        }
    });
    }
    render() {
        return (
            <div className="load-container">
                <button id="load" className="btn-block btn-lg btn">Xem Thêm</button>
            </div>
        )
    }
}
