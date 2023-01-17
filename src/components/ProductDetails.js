import React from 'react';
import Button from "./Button";

let productCount = 1;
function displayFormattedProductCount() {
    return productCount > 0 ? productCount : 'Zero'
}

function mouseOverEventhandler(){
    console.log("Mouse Over Event Happend!");
}

function ProductDetails(props) {
    let badgeClass = 'badge-margin-left-240  badge ';
    badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger';

    return (
        <div className="d-flex align-items-center justify-content-start mt-1" onMouseOver={mouseOverEventhandler} >
            <h6 className="font-weight-bold my-2" style={{ 'marginRight': 30 }}>{props.price}₹</h6>
            <Button >-</Button>
            <span style={{ 'padding': '0px 20px', "fontSize": 14, }}>
                {displayFormattedProductCount()}
            </span>
            <Button>+</Button>
            <span className={badgeClass}>{props.isAvailable ? 'Avilable' : 'Unavailable'}</span>
        </div>
    )
    // return React.createElement('div', {className: 'd-flex align-items-center justify-content-start mt-1'}, 
    //           React.createElement('h6',{className:"font-weight-bold my-2", style: {marginRight: 30 }}, "₹" + props.price ),
    //           React.createElement(Button, {}, "-"),
    //           React.createElement('span', {style: {padding: '0px 20px', fontSize: 14}},displayFormattedProductCount()),
    //           React.createElement(Button, {}, "+"),
    //           React.createElement('span', {className: badgeClass}, props.isAvailable ? "Available" : "UnAvailable")
    //           )
}

export default ProductDetails;
