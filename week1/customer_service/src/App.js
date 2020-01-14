import React from 'react';
import './App.css';
import Guarantee from './components/Guarantee';

function App() {
  return (
    <ul className="App">
     <Guarantee
     img = 'https://i.postimg.cc/7LrRhqKc/f-delivery.png'
     title='Free Shipment'
     description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
     />
       <Guarantee
     img = 'https://i.postimg.cc/TwCNtgTM/coin.png'
     title='100% Money Back'
     description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
     />
       <Guarantee
     img = 'https://i.postimg.cc/HnnZRnLJ/chat.png'
     title='Online Support 24/7'
     description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
     />
    </ul>
  );
}

export default App;
