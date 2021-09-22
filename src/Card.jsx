import { PromiseProvider } from "mongoose";
import React from "react";
import './Card.css';

function Card(props){
return (

  <div class="card">
  <img src={props.avatar} alt="Avatar" />
  <div class="container">
    <h4><b>{props.name}</b></h4>
    <p>{props.job}</p>
  </div>
  </div>
  
)
}
export default Card