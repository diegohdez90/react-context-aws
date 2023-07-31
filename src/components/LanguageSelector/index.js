import React, { Component } from 'react'
import LanguageContext from '../../contexts/LanguageContext';


class LanguageSelector extends Component {

  static contextType = LanguageContext;

  render() {
    console.log(this.context);
    return (
      <div>
        {this.context.language === 'en' ? 'Select language' : 'Selecciona idioma'}
        <i className="flag us" onClick={() => this.context.onChangeLanguage('en')} />
        <i className="flag mx" onClick={() => this.context.onChangeLanguage('es')} />
      </div>
    );
  }
}

export default LanguageSelector;
