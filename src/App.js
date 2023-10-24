import { Decks } from './pages/decks';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DeckContext } from './context/deck-context';
import { useContext } from 'react';
import { SingleDeck } from './components/singleDeck';


function App() {
  const {decks} = useContext(DeckContext)

  return (
    
    <div > 
      <Router> 
        <Routes>
          <Route path="/" element={<Decks />} />
          { decks?.map((deck) => (
            <Route key={deck.id} path={"/"+deck.name} element={<div className='single'><SingleDeck data={deck} key={deck.id} /></div>} />
          )) }
        </Routes>
      </Router>
    </div>
  );
}

export default App;
