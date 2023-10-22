import React, { useContext, useState, useEffect } from 'react'
import { DeckContext } from '../../context/deck-context'

export const VoidwardenPerks = () => {
  const {add_remove, replace_card, perkToggle, decks} = useContext(DeckContext)
  const [perks, setPerks] = useState([])

  useEffect(() => {
    decks.forEach((deck) => {
      if (deck.name === "voidwarden") {
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
            perkToggle("voidwarden", 0) 
            add_remove("minusOne","voidwarden", 2, 0)
        }} 
        />
        </div>

        <div> Remove one (-2) card
        <input 
          type='checkbox' 
          checked={perks[1]} 
          onChange={(e) => handleClick(e, 1)}  
          onClick={() => 
            {
            perkToggle("voidwarden", 1) 
            add_remove("minusTwo","voidwarden", 1, 1)
        }} 
        />
        </div>

        <div> Replace one (+0) card with one (+1) DARK card
        <input 
          type='checkbox' 
          checked={perks[2]} 
          onChange={(e) => handleClick(e, 2)}  
          onClick={() => {
            perkToggle("voidwarden", 2)
            replace_card("zero", "vw_dark","voidwarden", 1, 2)
          }} 
        />
        <input 
          type='checkbox' 
          checked={perks[3]} 
          onChange={(e) => handleClick(e, 3)}  
          onClick={() => {
            perkToggle("voidwarden", 3)
            replace_card("zero", "vw_dark","voidwarden", 1, 3)
          }} 
        />
        </div>

        <div> Replace one (+0) card with one (+1) FROST card
        <input 
          type='checkbox' 
          checked={perks[4]} 
          onChange={(e) => handleClick(e, 4)}  
          onClick={() => {
            perkToggle("voidwarden", 4)
            replace_card("zero", "vw_frost","voidwarden", 1, 4)
          }} 
        />
        <input 
          type='checkbox' 
          checked={perks[5]} 
          onChange={(e) => handleClick(e, 5)}  
          onClick={() => {
            perkToggle("voidwarden", 5)
            replace_card("zero", "vw_frost","voidwarden", 1, 5)
          }} 
        />
        </div>

        <div> Replace one (-1) card with one (+0) HEAL (+1) Ally card
        <input 
          type='checkbox' 
          checked={perks[6]} 
          onChange={(e) => handleClick(e, 6)}  
          onClick={() => {
            perkToggle("voidwarden", 6)
            replace_card("minusOne", "vw_healzero","voidwarden", 1, 6)
          }} 
        />
        <input 
          type='checkbox' 
          checked={perks[7]} 
          onChange={(e) => handleClick(e, 7)}  
          onClick={() => {
            perkToggle("voidwarden", 7)
            replace_card("minusOne", "vw_healzero","voidwarden", 1, 7)
          }} 
        />
        </div>

        <div> Add one (+1) HEAL (+1) Ally card
        <input 
          type='checkbox' 
          checked={perks[8]} 
          onChange={(e) => handleClick(e, 8)}  
          onClick={() => 
            {
            add_remove("vw_healone","voidwarden", 1, 8)
            perkToggle("voidwarden", 8) 
        }} 
        />
        <input 
          type='checkbox' 
          checked={perks[9]} 
          onChange={(e) => handleClick(e, 9)}  
          onClick={() => 
            {
            add_remove("vw_healone","voidwarden", 1, 9)
            perkToggle("voidwarden", 9) 
        }} 
        />
        <input 
          type='checkbox' 
          checked={perks[10]} 
          onChange={(e) => handleClick(e, 10)}  
          onClick={() => 
            {
            add_remove("vw_healone","voidwarden", 1, 10)
            perkToggle("voidwarden", 10) 
        }} 
        />
        </div>

        <div> Add one (+1) POISON card
        <input 
          type='checkbox' 
          checked={perks[11]} 
          onChange={(e) => handleClick(e, 11)}  
          onClick={() => 
            {
            add_remove("vw_poison","voidwarden", 1, 11)
            perkToggle("voidwarden", 11) 
        }} 
        />
        </div>

        <div> Add one (+3) card
        <input 
          type='checkbox' 
          checked={perks[12]} 
          onChange={(e) => handleClick(e, 12)}  
          onClick={() => 
            {
            add_remove("vw_three","voidwarden", 1, 12)
            perkToggle("voidwarden", 12) 
        }} 
        />
        </div>

        <div> Add one (+1) CURSE card
        <input 
          type='checkbox' 
          checked={perks[13]} 
          onChange={(e) => handleClick(e, 13)}  
          onClick={() => 
            {
            add_remove("vw_curse","voidwarden", 1, 13)
            perkToggle("voidwarden", 13) 
        }} 
        />
        <input 
          type='checkbox' 
          checked={perks[14]} 
          onChange={(e) => handleClick(e, 14)}  
          onClick={() => 
            {
            add_remove("vw_curse","voidwarden", 1, 14)
            perkToggle("voidwarden", 14) 
        }} 
        />
        </div>

    </div>
  )
}
