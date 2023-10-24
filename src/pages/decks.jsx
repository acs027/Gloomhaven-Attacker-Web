import React, { useState } from 'react'
import { DeckContext } from '../context/deck-context'
import { useContext } from 'react'
import { Deck } from '../components/deck'
import './decks.css'
import { SideMenu } from '../components/sidemenu'
import { ArrowSquareRight } from 'phosphor-react'
import { SideControl } from '../components/sideControl'

export const Decks = () => {
    const {decks} = useContext(DeckContext)
    const [reRender, setRerender] = useState(false)
    const [isOpen, setIsOpen] = useState(false)


  return (
    <div>
        <SideControl />
    <div className='decks-container'>

        <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} reRender={reRender} setRerender={setRerender} />

       
        <div className='decks'>
        {decks?.map((deck) => (
            <div key={deck.id} className='deck-container'>
            <Deck data={deck} key={deck.id} />
            </div>
        ))}

        <div className='side-button-container'> 

        <div className='sidebttn' onClick={() => {setIsOpen(!isOpen)}}>
            <button> 
                <ArrowSquareRight size={32} />
            </button>
            
        </div>
        </div>
        </div>
    </div>
    </div>
  )
}
