import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderImg from './HeaderImg.jsx'
import TopNav from './TopNav.jsx'
import CardList from './CardList.jsx'
import Footer from "./Footer.jsx"



ReactDOM.render(
  <div>
    <TopNav />
    <HeaderImg/>
    <hr></hr>
    <CardList />
    <Footer/>

  </div>
  
  ,
  document.getElementById('root')
);


