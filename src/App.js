import './App.css';
import Navbar from './components/Navbar.js';
import Image from './components/Image.js';
import ConditionalRendering from './components/ConditionalRendering.js';

function App() {
  return (
    <div className="App">
        <Navbar />   {/*including navbar component*/}

        <br />

        <div style={{display: 'flex', alignItems: 'center', gap: '100px', margin: '40px'}}> 
          <Image />
          <br />
          <ConditionalRendering />
        </div>
        
    </div>
  );
}

export default App;
