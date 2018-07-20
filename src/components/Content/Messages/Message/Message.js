import React, { Component } from "react";
import './message.scss'

class Message extends Component {

      render(){

        return(
            <div>
            <li className="sent">
            <img src="https://cdn.xl.thumbs.canstockphoto.com.br/usu%C3%A1rio-sinal-icon-pessoa-s%C3%ADmbolo-human-avatar-imagem_csp43862271.jpg" alt="" />
            <p>How the hell am I supposed to get a jury to believe you when I am not even sure that I do?!</p>
        </li>
        <li className="replies">
            <img src="https://www.simtechdev.com/docs/_images/User_Profile_Page_008.png" alt="" />
            <p>
               <img src="https://brainstormdeti.files.wordpress.com/2010/11/grafo.gif"/>
            
            </p>
        </li>
        <li className="replies">
            <img src="https://www.simtechdev.com/docs/_images/User_Profile_Page_008.png" alt="" />
            <p>Excuses don't win championships.</p>
        </li>
        <li className="sent">
            <img src="https://cdn.xl.thumbs.canstockphoto.com.br/usu%C3%A1rio-sinal-icon-pessoa-s%C3%ADmbolo-human-avatar-imagem_csp43862271.jpg" alt="" />
            <p>Oh yeah, did Michael Jordan tell you that?</p>
        </li>
        <li className="replies">
            <img src="https://www.simtechdev.com/docs/_images/User_Profile_Page_008.png" alt="" />
            <p>No, I told him that.</p>
        </li>
        <li className="replies">
            <img src="https://www.simtechdev.com/docs/_images/User_Profile_Page_008.png" alt="" />
            <p>What are your choices when someone puts a gun to your head?</p>
        </li>
        <li className="sent">
            <img src="https://cdn.xl.thumbs.canstockphoto.com.br/usu%C3%A1rio-sinal-icon-pessoa-s%C3%ADmbolo-human-avatar-imagem_csp43862271.jpg" alt="" />
            <p>What are you talking about? You do what they say or they shoot you.</p>
        </li>
        <li className="replies">
            <img src="https://www.simtechdev.com/docs/_images/User_Profile_Page_008.png" alt="" />
            <p>Wrong. You take the gun, or you pull out a bigger one. Or, you call their bluff. Or, you do any one of a hundred and forty six other things.</p>
        </li>
        </div>
        )
      }
}


export default Message;
