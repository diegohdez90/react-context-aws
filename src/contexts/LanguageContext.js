import React from 'react'

const Context = React.createContext('en');

export class LanguageStore extends React.Component {
  state = {
    language: 'en'
  };

  onChangeLanguage = (language) => {
    this.setState({
      language
    });
  }

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          onChangeLanguage: this.onChangeLanguage
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export default Context;
