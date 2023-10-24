import React, { useState } from 'react'
import { DeckContext } from '../context/deck-context'
import { useContext} from 'react'
import { HEROES } from '../HEROES'
import { SideMenu } from './sidemenu'
import { ArrowSquareRight, DotsNine } from 'phosphor-react'
import { Link, useLocation } from 'react-router-dom'


export const SideControl = () => {
  const {decks} = useContext(DeckContext)
  const [reRender, setRerender] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const location = useLocation()




  return (
    <div className='side-button-container'> 

    <div className='sidebttn' onClick={() => {setIsOpen(!isOpen)}}>
        <button> 
            <ArrowSquareRight size={32} />
        </button>
        
    </div>

    <SideMenu isOpen={isOpen} setIsOpen={setIsOpen} reRender={reRender} setRerender={setRerender} />

    <div className='scrolltohero'>
        <div className='show-all'>
            <Link to={"/"}> <DotsNine color="#202020" size={50} /> </Link>
        </div>
        {
            decks?.map((hero) => (
                <Link key={hero} to={"/"+hero.name}> <img className='icons' src={HEROES[hero.name].icon} alt={hero.name}  style={{backgroundColor: location.pathname === "/"+hero.name && "chocolate"}} /> </Link>
            ))
        }
    </div>
    </div>
      
  )
}