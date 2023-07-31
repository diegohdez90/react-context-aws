import React, { Component } from 'react'
import UserCreate from '../../components/UserCreate';
// import LanguageContext from '../../contexts/LanguageContext';

import { LanguageStore } from '../../contexts/LanguageContext';

import ColorContext from '../../contexts/ColorContext';
import LanguageSelector from '../../components/LanguageSelector';

class App extends Component {

  render() {
    return (
      <div className="ui container">
        <LanguageStore>
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
