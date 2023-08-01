import React, { Component } from 'react'
import UserCreate from '../../components/UserCreate';
// import LanguageContext from '../../contexts/LanguageContext';

import { LanguageStore } from '../../contexts/LanguageContext';

import ColorContext from '../../contexts/ColorContext';
import LanguageSelector from '../../components/LanguageSelector';

import logo from '../../logo.svg'
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";

class App extends Component {

  render() {
    return (
      <View className="App">
        <Card>
          <Image src={logo} className="App-logo" alt="logo" />
          <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <div className="ui container">
          <LanguageStore>
            <LanguageSelector />
            <ColorContext.Provider value="red">
              <UserCreate />
            </ColorContext.Provider>
          </LanguageStore>
        </div>        
        <Button onClick={this.props.signOut}>Sign Out</Button>
      </View>
    );
  }
}

export default withAuthenticator(App);
