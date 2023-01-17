import React from 'react';

function btnClickEventhandler(){
    console.log("Button Clicked!");
}
function Button(props){
    return  <button onClick={btnClickEventhandler} className="btn btn-primary">{props.children}</button>

}

export default Button;