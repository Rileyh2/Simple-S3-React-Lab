
import './Cards.css';
import React from 'react';
import Card from './Card';

function Cards(){
    return (
        <div id="cards-section" className="container container-fluid">
            <h2 id="cards-header">Example Card Descriptions</h2>
            <div className="row card-row">
                <Card cardTitle="Explore" cardText="Go through a wide variety of resources and discover things you may like." style = {{background: "linear-gradient(0deg, rgba(59,33,96,1) 0%, rgba(100,100,150,1) 100%)" }}/>
                <Card cardTitle="Search" cardText="Filter resources based on parameters to find exactly what you are looking for." style = {{background: "linear-gradient(0deg, rgba(59,33,96,1) 0%, rgba(100,100,150,1) 100%)"}} />
                <Card cardTitle="Reccomend" cardText="Give reviews, likes, and dislikes so that others can have an easier time searching items." style = {{background: "linear-gradient(0deg, rgba(59,33,96,1) 0%, rgba(100,100,150,1) 100%)"}} />
            </div>
        </div>
    );
};

export default Cards;