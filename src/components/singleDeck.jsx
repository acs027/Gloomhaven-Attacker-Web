import React, { useState } from 'react'
import { DeckContext } from '../context/deck-context'
import { Card } from '../components/card'
import { useContext, useEffect } from 'react'
import shuffleAudio from '../assets/shuffle.wav'
import { ArrowsClockwise } from 'phosphor-react'
import { HEROES } from '../HEROES'
import useSound from 'use-sound'
import { SideControl } from './sideControl'


export const SingleDeck = (props) => {
  const {name, deck} = props.data
  const {setOffset, resetDeck} = useContext(DeckContext)
  const [counter, setCounter] = useState(0)
  const [shuffle, setShuffle] = useState(false)

  const [play] = useSound(shuffleAudio, {volume: 0.2})
  

  const giveOffset = (card) => {
    if (!shuffle) {
      setOffset(deck, card)
      setCounter(counter+1)
      if (["miss", "crit"].includes(card.cardName)) setShuffle(true)
    } else {
      shuffleDeck()
    }
  }

  const shuffleDeck = () => {
    play()
    resetDeck(deck)
    setShuffle(false)
    setCounter(0)
  }

  useEffect(() => {
    setShuffle(false)
    setCounter(0)
  }, [deck.length])

  useEffect(() => {
    var tempCounter = 0
    deck.map((card) => {
      if (card.offset != 0) {
        tempCounter += 1
        if (["miss", "crit"].includes(card.cardName)) setShuffle(true)
      }
    })
    setCounter(tempCounter)
  }, [])
  
  

  return (
    <div className='deck'>
      <div className='deck-top'> 
        <div>
          {deck?.length - counter}
        </div>
        
        <div>
          {HEROES[name].name}
        </div>

        <div className='shuffle-button' onClick={() => {shuffleDeck()}} >
          <button><ArrowsClockwise size={32} /></button>
        </div>
      
      </div>
      {deck?.map((card) => (
        <div key={card.id} className="card" onClick={card.offset != 0 ? null : () => {giveOffset(card)}} style={{top: `${card.offset}px`}}>
          <Card data={card} key={card.id} />
          
        </div>
      ))}

        <SideControl />
      
    </div>
  )
}
