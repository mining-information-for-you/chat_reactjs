import React, { Component } from "react";
import './principal.scss'
import Sidepanel from "../Sidepanel/Sidepanel";
import Content from "../Content/Content";

class Principal extends Component {

      render(){

        return(
          <div  id="frame">
            <Sidepanel/>
            <Content/>

          </div>
        )
      }
}


export default Principal;
