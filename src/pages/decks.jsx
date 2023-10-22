import React, { useState, useRef } from 'react'
import { DeckContext } from '../context/deck-context'
import { useContext } from 'react'
import { Deck } from './deck'
import './decks.css'
import { SideMenu } from '../components/sidemenu'
import { ArrowSquareRight } from 'phosphor-react'

export const Decks = () => {
    const {decks} = useContext(DeckContext)
    const [reRender, setRerender] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const ref = useRef(null)

    const scroll = (index) => {
        const listNode = ref.current;
        const deckNode = listNode.querySelectorAll('div.deck-container')[index];
        deckNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });

    }

  return (
    <div className='decks-container'>
        <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} reRender={reRender} setRerender={setRerender} />

        <div className='sidebttn' onClick={() => {setIsOpen(!isOpen)}}>
            <button> 
                <ArrowSquareRight size={32} />
            </button>
            
        </div>
        <div ref={ref} className='decks'>
        {decks?.map((deck) => (
            <div key={deck.id} className='deck-container'>
            <Deck data={deck} key={deck.id} />
            </div>
        ))}
        <div className='scrolltohero'>
            {
                decks?.map((deck, index) => (
                    <button key={deck.id} onClick={() => {scroll(index)}}> {deck.name} </button>
                ))
            }
        </div>
        </div>
    </div>
  )
}
