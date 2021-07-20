import React from 'react';
import axios from 'axios';
import DisplayQuote from './Components/DisplayQuote';
import './App.css';

// const initialQuote = {
//   "quote": "By chilling my loins I increase the chances of impregnating my wife.",
//   "character": "Apu Nahasapeemapetilon",
//   "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
//   "characterDirection": "Left"
//   }

function App() {

  const [quote, setQuote] = React.useState({})

  const getQuote = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => setQuote(response.data[0]))
      
  }
    
      
      
  return (
    <div className="App">
      <h1 className="title">Simpsons Quotes</h1>
      <button className="button" type="button" onClick={getQuote}>Get A Quote</button>
     <DisplayQuote info={quote}/>
     
    </div>
  );
}

export default App;
