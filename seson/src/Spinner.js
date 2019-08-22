import React from "react";
import ReactDO from "react-dom";
const Spinner = (props)=>{
    return (
      <div>
        <div class="ui active dimmer">
          <div class="ui text loader">{props.message}</div>
        </div>
      </div>
    );
    
    
    
};

Spinner.defalutProps = {
  message: "loading......"
};

export default Spinner;