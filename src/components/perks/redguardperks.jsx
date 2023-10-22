import React, { useContext, useState, useEffect } from 'react'
import { DeckContext } from '../../context/deck-context'

export const RedguardPerks = () => {
  const {add_remove, replace_card, perkToggle, decks} = useContext(DeckContext)
  const [perks, setPerks] = useState([])

  useEffect(() => {
    decks.forEach((deck) => {
      if (deck.name === "redguard") {
        setPerks(deck.perks)
      } 
    })
  }, [])

  function handleClick(e, index) {
    let tempPerks = {...perks}
    tempPerks[index] = e.target.checked
    setPerks(tempPerks)
    console.log(tempPerks)
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
            perkToggle("redguard", 0) 
            add_remove("zero","redguard", 4, 0)
        }} 
        />
        </div>
        
        <div> Remove two (-1) cards
        <input 
          type='checkbox' 
          checked={perks[1]} 
          onChange={(e) => handleClick(e, 1)}  
          onClick={() => { perkToggle("redguard", 1)
            add_remove("minusOne","redguard", 2, 1)}} 
        />
        </div>

        <div> Remove one (-2) card and one (+1) card
        <input 
          type='checkbox' 
          checked={perks[2]} 
          onChange={(e) => handleClick(e, 2)}  
          onClick={() => {
            perkToggle("redguard", 2)
            replace_card("minusTwo", "redguard_one","redguard", 1, 2)
          }} 
        />
        </div>

        <div> Replace one (-1) card with one (+1) card
        <input 
          type='checkbox' 
          checked={perks[3]} 
          onChange={(e) => handleClick(e, 3)}  
          onClick={() => {
            perkToggle("redguard", 3)
            replace_card("minusOne", "redguard_one","redguard", 1, 3)
          }} 
        />
        <input 
          type='checkbox' 
          checked={perks[4]} 
          onChange={(e) => handleClick(e, 4)}  
          onClick={() => {
            perkToggle("redguard", 4)
            replace_card("minusOne", "redguard_one","redguard", 1, 4)
          }} 
        />
        </div>

        <div> Replace one (+1) card with one (+2) FIRE card
        <input 
          type='checkbox' 
          checked={perks[5]} 
          onChange={(e) => handleClick(e, 5)}  
          onClick={() => {
            perkToggle("redguard", 5)
            replace_card("plusOne", "redguard_fire","redguard", 1, 5)
          }} 
        />
        <input 
          type='checkbox' 
          checked={perks[6]} 
          onChange={(e) => handleClick(e, 6)}  
          onClick={() => {
            perkToggle("redguard", 6)
            replace_card("plusOne", "redguard_fire","redguard", 1, 6)
          }} 
        />
        </div>

        <div> Replace one (+1) card with one (+2) SUN card
        <input 
          type='checkbox' 
          checked={perks[7]} 
          onChange={(e) => handleClick(e, 7)}  
          onClick={() => {
            perkToggle("redguard", 7)
            replace_card("plusOne", "redguard_sun","redguard", 1, 7)
          }} 
        />
        <input 
          type='checkbox' 
          checked={perks[8]} 
          onChange={(e) => handleClick(e, 8)}  
          onClick={() => {
            perkToggle("redguard", 8)
            replace_card("plusOne", "redguard_sun","redguard", 1, 8)
          }} 
        />
        </div>

        <div> Add one (+1) FIRE-SUN card
        <input 
          type='checkbox' 
          checked={perks[9]} 
          onChange={(e) => handleClick(e, 9)}  
          onClick={() => {
            add_remove("redguard_firesun", "redguard", 1, 9)
            perkToggle("redguard", 9)
          }} 
        />
        <input 
          type='checkbox' 
          checked={perks[10]} 
          onChange={(e) => handleClick(e, 10)}  
          onClick={() => {
            add_remove("redguard_firesun", "redguard", 1, 10)
            perkToggle("redguard", 10)
          }} 
        />
        </div>

        <div> Add one (+1) Shield(1) card
        <input 
          type='checkbox' 
          checked={perks[11]} 
          onChange={(e) => handleClick(e, 11)}  
          onClick={() => {
            add_remove("redguard_shield", "redguard", 1, 11)
            perkToggle("redguard", 11)
          }} 
        />
        <input 
          type='checkbox' 
          checked={perks[12]} 
          onChange={(e) => handleClick(e, 12)}  
          onClick={() => {
            add_remove("redguard_shield", "redguard", 1, 12)
            perkToggle("redguard", 12)
          }} 
        />
        </div>

        <div> Replace one (+0) card with one (+1) IMMOBILIZE card
        <input 
          type='checkbox' 
          checked={perks[13]} 
          onChange={(e) => handleClick(e, 13)}  
          onClick={() => {
            perkToggle("redguard", 13)
            replace_card("zero", "redguard_immo","redguard", 1, 13)
          }} 
        />
        </div>

        <div> Replace one (+0) card with one (+1) WOUND card
        <input 
          type='checkbox' 
          checked={perks[14]} 
          onChange={(e) => handleClick(e, 14)}  
          onClick={() => {
            perkToggle("redguard", 14)
            replace_card("zero", "redguard_bleed","redguard", 1, 14)
          }} 
        />
        </div>

    </div>
  )
}
