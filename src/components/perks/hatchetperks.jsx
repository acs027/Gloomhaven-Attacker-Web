import React, { useContext, useState, useEffect } from 'react'
import { DeckContext } from '../../context/deck-context'

export const HatchetPerks = () => {
  const {add_remove, replace_card, perkToggle, decks} = useContext(DeckContext)
  const [perks, setPerks] = useState([])

  useEffect(() => {
    decks.forEach((deck) => {
      if (deck.name === "hatchet") {
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
        <div> Remove two (-1) cards
        <input 
          type='checkbox' 
          checked={perks[0]} 
          onChange={(e) => handleClick(e, 0)}  
          onClick={() => 
            {
            perkToggle("hatchet", 0) 
            add_remove("minusOne","hatchet", 2, 0)
        }} 
        />
        <input 
          type='checkbox' 
          checked={perks[1]} 
          onChange={(e) => handleClick(e, 1)}  
          onClick={() => 
            {
            perkToggle("hatchet", 1) 
            add_remove("minusOne","hatchet", 2, 1)
        }} 
        />
        </div>
        
        <div> Replace one (+0) card with one (+2) MUDDLE card
        <input 
          type='checkbox' 
          checked={perks[2]} 
          onChange={(e) => handleClick(e, 2)}  
          onClick={() => {
            perkToggle("hatchet", 2)
            replace_card("zero", "hatchet_muddle","hatchet", 1, 2)
          }} 
        />
        </div>

        <div> Replace one (+0) card with one (+1) POISON card
        <input 
          type='checkbox' 
          checked={perks[3]} 
          onChange={(e) => handleClick(e, 3)}  
          onClick={() => {
            perkToggle("hatchet", 3)
            replace_card("zero", "hatchet_poison","hatchet", 1, 3)
          }} 
        />
        </div>

        <div> Replace one (+0) card with one (+1) WOUND card
        <input 
          type='checkbox' 
          checked={perks[4]} 
          onChange={(e) => handleClick(e, 4)}  
          onClick={() => {
            perkToggle("hatchet", 4)
            replace_card("zero", "hatchet_bleed","hatchet", 1, 4)
          }} 
        />
        </div>

        <div> Replace one (+0) card with one (+1) IMMOBILIZE card
        <input 
          type='checkbox' 
          checked={perks[5]} 
          onChange={(e) => handleClick(e, 5)}  
          onClick={() => {
            perkToggle("hatchet", 5)
            replace_card("zero", "hatchet_immo","hatchet", 1, 5)
          }} 
        />
        </div>

        <div> Replace one (+0) card with one (+1) PUSH card
        <input 
          type='checkbox' 
          checked={perks[6]} 
          onChange={(e) => handleClick(e, 6)}  
          onClick={() => {
            perkToggle("hatchet", 6)
            replace_card("zero", "hatchet_push","hatchet", 1, 6)
          }} 
        />
        </div>

        <div> Replace one (+0) card with one (+0) STUN card
        <input 
          type='checkbox' 
          checked={perks[7]} 
          onChange={(e) => handleClick(e, 7)}  
          onClick={() => {
            perkToggle("hatchet", 7)
            replace_card("zero", "hatchet_stunzero","hatchet", 1, 7)
          }} 
        />
        </div>

        <div> Replace one (+1) card with one (+1) STUN card
        <input 
          type='checkbox' 
          checked={perks[8]} 
          onChange={(e) => handleClick(e, 8)}  
          onClick={() => {
            perkToggle("hatchet", 8)
            replace_card("zero", "hatchet_stunone","hatchet", 1, 8)
          }} 
        />
        </div>

        <div> Add one (+2) WIND card
        <input 
          type='checkbox' 
          checked={perks[9]} 
          onChange={(e) => handleClick(e, 9)}  
          onClick={() => 
            {
            add_remove("hatchet_wind","hatchet", 1, 9)
            perkToggle("hatchet", 9) 
        }} 
        />
        <input 
          type='checkbox' 
          checked={perks[10]} 
          onChange={(e) => handleClick(e, 10)}  
          onClick={() => 
            {
            add_remove("hatchet_wind","hatchet", 1, 10)
            perkToggle("hatchet", 10) 
        }} 
        />
        <input 
          type='checkbox' 
          checked={perks[11]} 
          onChange={(e) => handleClick(e, 11)}  
          onClick={() => 
            {
            add_remove("hatchet_wind","hatchet", 1, 11)
            perkToggle("hatchet", 11) 
        }} 
        />
        </div>

        <div> Replace one (+1) card with one (+3) card
        <input 
          type='checkbox' 
          checked={perks[12]} 
          onChange={(e) => handleClick(e, 12)}  
          onClick={() => {
            perkToggle("hatchet", 12)
            replace_card("zero", "hatchet_three","hatchet", 1, 12)
          }} 
        />
        <input 
          type='checkbox' 
          checked={perks[13]} 
          onChange={(e) => handleClick(e, 13)}  
          onClick={() => {
            perkToggle("hatchet", 13)
            replace_card("zero", "hatchet_three","hatchet", 1, 13)
          }} 
        />
        <input 
          type='checkbox' 
          checked={perks[14]} 
          onChange={(e) => handleClick(e, 14)}  
          onClick={() => {
            perkToggle("hatchet", 14)
            replace_card("zero", "hatchet_three","hatchet", 1, 14)
          }} 
        />
        </div>

    </div>
  )
}
