import React from 'react';
import { About } from './components/About';
import { Conatact } from './components/Contact';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { GlobalStyle, ScrollEfect } from './styles/style';

function App() {
  return (
    <div className="App">
      <ScrollEfect>
        
          <Main />
          <About />
          <Conatact />
      </ScrollEfect>
      <GlobalStyle />
    </div>
  );
}

export default App;
