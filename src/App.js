import './App.css';

import Navbar from './components/Navbar.js';
import Image from './components/Image.js';
import ConditionalRendering from './components/ConditionalRendering.js';
import ListRendering from './components/List Rendering/ListRendering.js';
import EventResponding from './components/Event Responding/EventResponding.js';
import ButtonCounter from './components/Button Counter/ButtonCounter.js';

function App() {
  return (
    <div className="App">
        <Navbar />   {/*including navbar component*/}

        <br />

        <div style={{display: 'flex', alignItems: 'center', gap: '100px', margin: '40px'}}> 
          <Image />
          <br />
          <ConditionalRendering />  {/* conditional rendering */}
          <br />

          <div>
            <ListRendering /> {/* list rendering */}
            <br />
            <EventResponding />
            <br />
            <span><ButtonCounter /></span>
          </div>
          
        </div>
        
    </div>
  );
}

export default App;
