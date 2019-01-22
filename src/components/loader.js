import '../assets/styles/loader.scss'
import React, { Component } from 'react';
import LoaderImg from '../assets/images/loader.gif'

class Loader extends Component {
  render() {
    return (
      <div className={`loader ${this.props.show ? 'show' : ''}`}>
        <div className='loader__content'>
          <img src={LoaderImg} alt="Carregando" />
          <p>Procurando localização no mapa</p>
        </div>
      </div>
    );
  }
}

export default Loader
