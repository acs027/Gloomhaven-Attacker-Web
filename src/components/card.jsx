
import React from 'react'
import { CARDS } from '../CARDS'

export const Card = (props) => {
  const { cardName, offset } = props.data

  return (
    
        <img  src={offset != 0 ? CARDS[cardName] : CARDS.back} alt={cardName} />
   
  )
}


