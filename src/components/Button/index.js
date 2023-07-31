import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguageContext';
import ColorContext from '../../contexts/ColorContext';

class Button extends Component {

  renderSubmit(value) {
    return value === 'en' ? 'Submit' : 'Enviar'
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
      <LanguageContext.Consumer>
      {({ language: value }) => this.renderSubmit(value)}
      </LanguageContext.Consumer>
    </button>
    );
  }

  render() {
    return (
      <ColorContext.Consumer>
        {(value) => this.renderButton(value)}
      </ColorContext.Consumer>
    )
  }
}

export default Button;
