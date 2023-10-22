import React, { useContext, useState, useEffect } from 'react'
import { DeckContext } from '../../context/deck-context'

export const DemolitionistPerks = () => {
  const {add_remove, replace_card, perkToggle, decks} = useContext(DeckContext)
  const [perks, setPerks] = useState([])

  useEffect(() => {
    decks.forEach((deck) => {
      if (deck.name === "demolitionist") {
        setPerks(deck.perks)
      } 
    })
  }, [])

  function handleClick(e, index) {
    let tempPerks = {...perks}
    tempPerks[index] = e.target.checked
    setPerks(tempPerks)
  }



  return (
    <div className='perks'>
           <div> Remove four (+0) cards
        <input 
          type='checkbox' 
          checked={perks[0]} 
          onChange={(e) => handleClick(e, 0)}  
          onClick={() => 
            {
            perkToggle("demolitionist", 0) 
            add_remove("zero","demolitionist", 4, 0)
        }} 
        />
        
        </div>

        <div> Remove two (-1) cards
        <input 
          type='checkbox' 
          checked={perks[1]} 
          onChange={(e) => handleClick(e, 1)}  
          onClick={() => { perkToggle("demolitionist", 1)
            add_remove("minusOne","demolitionist", 2, 1)}} 
        />
        <input 
          type='checkbox' 
          checked={perks[2]} 
          onChange={(e) => handleClick(e, 2)}  
          onClick={() => { perkToggle("demolitionist", 2)
            add_remove("minusOne","demolitionist", 2, 2)}} 
        />
        </div>

        <div> Remove one (-2) card and one (+1) card
        <input 
          type='checkbox' 
          checked={perks[3]} 
          onChange={(e) => handleClick(e, 3)}  
          onClick={() => {
            perkToggle("demolitionist", 3)
            add_remove("minusTwo","demolitionist", 1, 3)
            add_remove("plusOne", "demolitionist", 1, 3)
          }} 
        />
        </div>

        <div> Replace one (+0) card with one (+2) MUDDLE card
        <input 
          type='checkbox' 
          checked={perks[4]} 
          onChange={(e) => handleClick(e, 4)}  
          onClick={() => {
            perkToggle("demolitionist", 4)
            replace_card("zero", "demo_muddle","demolitionist", 1, 4)
          }} 
        />
          <input 
          type='checkbox' 
          checked={perks[5]} 
          onChange={(e) => handleClick(e, 5)}  
          onClick={() => {
            perkToggle("demolitionist", 5)
            replace_card("zero", "demo_muddle","demolitionist", 1, 5)
          }} 
        />
        </div>

        <div> Replace one (-1) card with one (+1) POISON card
        <input 
          type='checkbox' 
          checked={perks[6]} 
          onChange={(e) => handleClick(e, 6)}  
          onClick={() => {
            perkToggle("demolitionist", 6)
            replace_card("minusOne", "demo_poison","demolitionist", 1, 6)
          }} 
        />
        </div>

        <div> Add one (+2) card
        <input 
          type='checkbox' 
          checked={perks[7]} 
          onChange={(e) => handleClick(e, 7)}  
          onClick={() => 
            {
            add_remove("demo_two","demolitionist", 1, 7)
            perkToggle("demolitionist", 7) 
        }} 
        />
        <input 
          type='checkbox' 
          checked={perks[8]} 
          onChange={(e) => handleClick(e, 8)}  
          onClick={() => 
            {
            add_remove("demo_two","demolitionist", 1, 8)
            perkToggle("demolitionist", 8) 
        }} 
        />
        </div>

        <div> Replace one (+1) card with one (+2) EARTH card
        <input 
          type='checkbox' 
          checked={perks[9]} 
          onChange={(e) => handleClick(e, 9)}  
          onClick={() => {
            perkToggle("demolitionist", 9)
            replace_card("plusOne", "demo_earth","demolitionist", 1, 9)
          }} 
        />
        <input 
          type='checkbox' 
          checked={perks[10]} 
          onChange={(e) => handleClick(e, 10)}  
          onClick={() => {
            perkToggle("demolitionist", 10)
            replace_card("plusOne", "demo_earth","demolitionist", 1, 10)
          }} 
        />
        </div>

        <div> Replace one (+1) card with one (+2) FIRE card
        <input 
          type='checkbox' 
          checked={perks[11]} 
          onChange={(e) => handleClick(e, 11)}  
          onClick={() => {
            perkToggle("demolitionist", 11)
            replace_card("plusOne", "demo_fire","demolitionist", 1, 11)
          }} 
        />
        <input 
          type='checkbox' 
          checked={perks[12]} 
          onChange={(e) => handleClick(e, 12)}  
          onClick={() => {
            perkToggle("demolitionist", 12)
            replace_card("plusOne", "demo_fire","demolitionist", 1, 12)
          }} 
        />
        </div>

        <div> Add one (+0), All adjacent enemies suffer 1 damage card
        <input 
          type='checkbox' 
          checked={perks[13]} 
          onChange={(e) => handleClick(e, 13)}  
          onClick={() => 
            {
            add_remove("demo_special","demolitionist", 1, 13)
            perkToggle("demolitionist", 13) 
        }} 
        />
        <input 
          type='checkbox' 
          checked={perks[14]} 
          onChange={(e) => handleClick(e, 14)}  
          onClick={() => 
            {
            add_remove("demo_special","demolitionist", 1, 14)
            perkToggle("demolitionist", 14) 
        }} 
        />
        </div>

    </div>
  )
}
