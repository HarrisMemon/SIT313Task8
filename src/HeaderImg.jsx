import React from "react"
import headerimgage from './images/pic1.jpg';
import './Header.css'

function HeaderImg(){
    return (
      <header>
          <div><img class='headimg' src= {headerimgage} alt="header"/></div>
          <h2 class="imageover">Harris Memon - SIT313 Task 8.1</h2>
          <h3 class="feat" >Featured Experts</h3>
          <div>
      </div>
      </header>
      
    )
  }
  export default HeaderImg