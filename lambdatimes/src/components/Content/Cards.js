import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => {
        return (
          <Card 
          key={card.index}
          card={card}
          />
        )
      })}
    </div>
  )
}


Cards.propTypes = {
  card: PropTypes.arrayOf(
    PropTypes.shape({
      card: PropTypes.func
    })
  )
}

// Make sure you include prop types for all of your incoming props

export default Cards;

/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/