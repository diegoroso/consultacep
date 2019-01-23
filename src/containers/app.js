import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchCep } from '../actions/cep'
import { fetchGeolocation } from '../actions/map'
import { resetToDefault } from '../actions/reset';

import Map from '../components/map';
import Loader from '../components/loader';
import InputCep from '../components/input-cep'
import backIcon from '../assets/images/back.png'

const mapStateToProps = state => ({
  location: state.location
})

class App extends Component {

  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }


  fetchCep = (payload) => {
    this.props.fetchCep(payload)
  }

  handleClick = () => {
    this.props.resetToDefault()
    this.InputCep.resetState()
  }

  title = () => {
    const { cep } = this.props.location.data

    if (!cep) {
      return <h1 className='app__informations__title'>Consulta CEP</h1>
    }
  }

  description = () => {
    const { cep } = this.props.location.data
    const { error, loaded, loading } = this.props.location

    if (!cep && !error && !loaded) {
      return <p className='app__informations__description'>Preencha o cep no campo abaixo para consultar a região desejada.</p>
    }

    if (!cep && error && !loading) {
      return <p className='app__informations__description app__informations__description--error'>CEP não encontrado, por favor tente novamente.</p>
    }
  }

  address = () => {
    const {cep, logradouro, bairro, localidade, uf} = this.props.location.data

    return (
      <Fragment>
        { cep ?
          <div className='app__informations__addresses'>
            <img src={backIcon} onClick={this.handleClick} alt='Voltar' />
            <div>
              { logradouro && bairro ? <p>{logradouro}, {bairro}</p> : '' }
              { localidade && uf ? <p>{localidade}/{uf} - {cep}</p> : '' }
            </div>
          </div>
        : ''}
      </Fragment>
    )
  }

  render = () => {
    const {loading, data} = this.props.location
    return (
      <div className="app">
        <Map location={this.props.location}/>
        <div className={`app__informations ${data.cep ? 'loaded' : ''}`}>
          <div className='app__informations__box'>
            { this.title() }
            { this.description() }
            <InputCep onRef={ref => this.InputCep = ref} onFetchCep={this.fetchCep}/>
            { this.address() }
          </div>
        </div>
        <Loader show={loading}></Loader>
      </div>
    );
  }
}
export default connect(mapStateToProps, { fetchCep, fetchGeolocation, resetToDefault })(App)
