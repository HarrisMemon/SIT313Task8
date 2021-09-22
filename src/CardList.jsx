import React from "react";
import faker from "faker";
import Card from "./Card";
import './Card.css';
import expertList from "./expertList.js";
import expertList2 from "./expertList2.js";

function cardComp (expert , i){
    return <Card 
    avatar = {expert.avatar}
    name = {expert.name}
    job = {expert.job}
    />
}

function CardList(){
return (
<div className="container">
<div className="row">
    {expertList.map(cardComp)}
</div>
<div className="row">
    {expertList2.map(cardComp)}
</div>
</div>


 


)

}
export default CardList