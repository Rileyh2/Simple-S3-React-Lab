import './Card.css';
import React, {Component} from 'react';

class Card extends Component {
    render(){
        return(
            <div className="card col-lg-3 mx-auto" style={this.props.style}>
                <h3 className="card-title">{this.props.cardTitle}</h3>
                <p className="card-text">{this.props.cardText}</p>
                <a href="#" className="link-val">See More &gt;&gt;</a>
            </div>
        )
    }
}

export default Card;