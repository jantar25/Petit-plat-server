import React from 'react'

import Card from './Card/Card'
import './Cards.css'
import cardItems from '../../constants/cards'

const Cards = () => {
  return (
    <div className='cards-container '>
        {cardItems.map(card => <Card key={card.id} card={card} />)}
    </div>
  )
}

export default Cards