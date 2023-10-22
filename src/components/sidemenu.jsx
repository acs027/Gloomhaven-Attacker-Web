import React, { useContext, useState } from 'react'
import { RedguardPerks } from './perks/redguardperks'
import { HatchetPerks } from './perks/hatchetperks'
import { DemolitionistPerks } from './perks/demolitionistperks'
import { VoidwardenPerks } from './perks/voidwardenperks'
import { DeckContext } from '../context/deck-context'
import { HEROES } from '../HEROES'
import { Trash } from 'phosphor-react'
import { ArrowSquareLeft } from 'phosphor-react'
import sidemenubg from '../assets/gha_side_bg.jpg'

export const SideMenu = ({isOpen, setIsOpen, reRender, setRerender}) => {
  
  const {addDeck, decks, heroes, removeDeckByName, shuffleIfModified} = useContext(DeckContext)

  const [selectedHero, setSelectedHero] = useState(null)

  const [clickedHero, setClickedHero] = useState(null)


  function add_hero_deck() {
    if (selectedHero) {
      addDeck(selectedHero)
      setSelectedHero(null)
    } else {
      addDeck(heroes[0])
    }
    setRerender(!reRender)
  }

  function removeHero() {
    removeDeckByName(clickedHero)
    setClickedHero(null)
  }

  function clickIcon(heroname) {
    if (clickedHero === heroname) {
      setClickedHero(null)
    } else {
      setClickedHero(heroname)
    }
  }

  function closeSideMenu() {
    setIsOpen(!isOpen)
    shuffleIfModified()
  }
  

  return (
    <div className={`sidemenu ${isOpen ? 'open' : ''}`} >

      <div className='togglemenu' onClick={() => closeSideMenu()}>
        <button><ArrowSquareLeft size={32} /></button>
      </div>

      <div className='hero-select-container'>
      {
        heroes.length < 1 ? null :

        <div className='hero-select'> 
        <select 
        onChange={(choice) => setSelectedHero(choice.target.value)} >
          {
            heroes?.map((hero) => (
              <option key={hero} value={hero}>{HEROES[hero].name}</option>
            ))
          }
        </select>

        <div className='deck-add-bttn' onClick={() => add_hero_deck()}>
        Add Deck
        </div>
      </div>
      }
      </div>
     
      <div className='icons-container' >
        
        {decks?.map((deck) => (
          <div key={deck.id}  className={`icons ${clickedHero === deck.name ? 'clicked': ''}`} onClick={() => {clickIcon(deck.name)}}> 
            <img key={deck.id} src={HEROES[deck.name].icon} alt={deck.name} />
          </div>
        ))}

      </div>  

        <div className='perk-container'>
        {clickedHero === "redguard" && decks.length > 0 && <RedguardPerks />}
        {clickedHero === "hatchet" && decks.length > 0 && <HatchetPerks />}
        {clickedHero === "demolitionist" && decks.length > 0 && <DemolitionistPerks />}
        {clickedHero === "voidwarden" && decks.length > 0 && <VoidwardenPerks />}
        </div>
        <div className='hero-remover-container'>
        {clickedHero && <button onClick={() => removeHero()}> <Trash size={32} /> </button>}
        </div>
        
        {/* outside close button */}
        { isOpen && <div className='close-sidemenu' onClick={() => closeSideMenu()}></div>}
        
        <div className='sidemenu-bg'>
          <img src= {sidemenubg} alt='sidemenubg' /> 
        </div>
        </div>

        
  )
}
