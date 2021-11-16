import logo from './logo.svg';
import './App.css';
import Header from './Header';
import BodyMain from './Main';
import Bodyfooter from './Footer';
import React from "react";
import foto from './logo1.jpg'
import ItemCount from './ItemCount'

function App() { 
return (
    <> <Header/>
    <img src={foto}/>
    <hr/>
    <BodyMain/>
    <hr/>
    <BodyFooter/>
    <ItemCount max= {10} initial= {1} />
    </>
);
}
