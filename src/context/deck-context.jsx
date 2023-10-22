import React, { createContext, useEffect, useState } from 'react'
import { HEROES } from '../HEROES'
import { v4 } from 'uuid'

export const DeckContext = createContext(null)

const defaultDeck = () => {
    const deck = []
    
    for (let i=0; i<6; i++) deck.push({id: v4(), cardName: "zero", offset: 0})
    for (let i=0; i<5; i++) deck.push({id: v4(), cardName: "plusOne", offset: 0})
    for (let i=0; i<5; i++) deck.push({id: v4(), cardName: "minusOne", offset: 0})
    deck.push({id: v4(), cardName: "plusTwo", offset: 0})
    deck.push({id: v4(), cardName: "minusTwo", offset: 0})
    deck.push({id: v4(), cardName: "crit", offset: 0})
    deck.push({id: v4(), cardName: "miss", offset: 0})

    shuffleDeck(deck)

    return deck
}

const shuffleDeck = (deck) => {
  for (let i=deck.length-1; i>0; i--) {
    const j = Math.floor(Math.random() * (i+1))
    const temp = deck[i]
    deck[i] = deck[j]
    deck[j] = temp
  }
}

export const DeckContextProvider = (props) => {

  const [deck, setDeck] = useState(null)
  const [decks, setDecks] = useState([])

  const [heroes, setHeroes] = useState([])

  window.onbeforeunload = function() {
    if (decks.length > 0) {
      localStorage.setItem('items', JSON.stringify(decks))
    }
  }

  const setOffset = (c_deck, c_card) => {
    let offset = 140
    c_deck?.map((card) => {
       if (card.offset != 0) {
        card.offset += offset
      }
    })
    c_card.offset += offset
  }

  const addDeck = (hero) => {
    let newDeck = defaultDeck()
    let id = v4()
    const tempDecks = decks
    const perkValues = Array(15).fill(false)
    
    tempDecks.push({id: id, name:hero, deck: newDeck, perks: perkValues, deckModified: false})
    setDecks(tempDecks)

    let tempList = heroes.filter(function(thero) {
      return thero !== hero
    })

    setHeroes(tempList)
  }

  const resetDeck = (deck) => {
    deck?.map((card) => {
      card.offset = 0
    })
    shuffleDeck(deck)
  }

  const removeDeck = (deckID) => {
    let tempDecks = decks.filter(function(sdeck){
      return sdeck.id !== deckID
    })
    setDecks(tempDecks)
  }

  const removeDeckByName = (deck_name) => {
    let tempDecks = decks.filter(function(sdeck){
      return sdeck.name !== deck_name
    })
    setDecks(tempDecks)
  }

  const removeFromDeck = (tar_cardName, deck) => {

    for (let i = 0; i<deck.deck.length; i++) {
      let card = deck.deck[i]
      if (card.cardName === tar_cardName) {
        let tempDeck = deck.deck.splice(deck.deck.indexOf(card), 1)
        setDeck(tempDeck)
        return
      }
    }
  }

  const addToDeck = (tar_cardName, deck, count) => {
    for (let i=0; i<count; i++) {
      let tempCard = {id: v4(), cardName: tar_cardName, offset: 0}
      deck.deck.push(tempCard)
    }
    setDeck(deck)
  }

  const replaceCard = (tar_cardName, new_cardName, deck, count) => {
    let counter = 0

    deck.deck.map((card) => {
      if (card.cardName === tar_cardName && counter < count) {
        card.cardName = new_cardName
        counter += 1
      }
    })
  }

  const add_remove = (tar_cardName, tar_deck, count, perkIndex) => {
    decks.map((deck) => {
      deck.deckModified = true
      if (deck.name === tar_deck) {
        if (deck.perks[perkIndex]) {
          for ( let z = 0; z<count; z++) {
            removeFromDeck(tar_cardName, deck)
          }
        } else {
          addToDeck(tar_cardName, deck, count)
        }
      }
    })
  }

  const replace_card = (a_card, b_card, tar_deck, count, perkIndex) => {
    decks.map((deck) => {
      deck.deckModified = true
      if (deck.name === tar_deck) {
        if (deck.perks[perkIndex]) {
          replaceCard(a_card, b_card, deck, count)
        } else {
          replaceCard(b_card, a_card, deck, count)
        }
      }
    })
  }

  const perkToggle = (tar_deck, perkIndex) => {
    decks.map((deck) => {
      if (deck.name === tar_deck) {
        deck.perks[perkIndex] = !deck.perks[perkIndex]
      }
    })
  }

  const shuffleIfModified = () => {
    decks.map((deck) => {
      if (deck.deckModified) {
        resetDeck(deck.deck)
        deck.deckModified = false
      }
    })
  }

  const contextValue = {
    deck,
    decks,
    heroes,
    addDeck,
    setOffset,
    resetDeck,
    removeDeck,
    removeDeckByName,
    add_remove,
    replace_card,
    perkToggle,
    shuffleIfModified
  }

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('items'))
    if (items) {
      setDecks(items)
    }
  }, [])

  useEffect(() => {
    if (decks.length > 0) {
      localStorage.setItem('items', JSON.stringify(decks))
    }
  }, [decks])
  

  useEffect(() => {
    const tempHeroes = []
    const existHeroes = []

    decks?.map((deck) => (
      existHeroes.push(deck.name)
      ))

    for (const [key,value] of Object.entries(HEROES)) {
      if (!existHeroes.includes(key)) {
        tempHeroes.push(key)
      } 
    }
    setHeroes(tempHeroes)
  }, [decks])
  
  

  return (
    <DeckContext.Provider value={contextValue} >
        {props.children}
        </DeckContext.Provider>
  )
}
