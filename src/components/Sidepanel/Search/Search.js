import React, { Component } from "react";
import './search.scss'

class Search extends Component {

      render(){

        return(
          
        <div id="search">
			    <label for=""><i class="fa fa-search" aria-hidden="true"></i></label>
			    <input type="text" placeholder="Search contacts..." />
		    </div>

         
        )
      }
}


export default Search;
