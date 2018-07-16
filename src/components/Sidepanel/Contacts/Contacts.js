import React, { Component } from "react";
import './contacts.scss'
import Contact from "./Contact/Contact";


class Contacts extends Component {

      render(){

        return(
            <div id="contacts">
			    <ul>
				    <li className="contact">
                        <Contact/>
                    </li>
                    <li className="contact active">
                        <Contact/>
                    </li>
                    <li className="contact">
                        <Contact/>
                    </li>
                    <li className="contact">
                        <Contact/>
                    </li>
                    <li className="contact">
                        <Contact/>
                    </li>
                    <li className="contact">
                        <Contact/>
                    </li>
                    <li className="contact">
                        <Contact/>
                    </li> 
                </ul>
            </div>
        )
      }
}


export default Contacts;
