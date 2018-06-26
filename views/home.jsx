var React = require('react');
var LayoutContainer = require('./layout.jsx')

class Home extends React.Component {
  render() {

    const allPokemonStyle = {
      textAlign: 'center'
    }

    const pokemonStyle = {
      margin: '0 auto',
      display: 'inline-block',
      margin: '15px',
    }

    const imgStyle = {
      backgroundColor: '#F2F2F2',
      borderRadius: '5px',
      margin: '0 auto',
      padding: '10px',
      width: '150px',
      textAlign: 'center'
    }

    const numStyle = {
      fontSize: '0.8rem',
      color: 'gray',
      margin: '5px 0px 0px 0px',
      padding: '0px'
    }

    const nameStyle = {
      color: 'black',
      margin: '0px',
      padding: '0px'
    }

    const pokemonList = this.props.all_Pokemon.map( (element) => {

      return (
        <div className="pokemon" style={pokemonStyle}>
        <p style={imgStyle}><img src={element.img} /></p>
        <p style={numStyle}>#{element.num}</p>
        <p style={nameStyle}>{element.name}</p>
        </div>
        );
    })

    return (

      <LayoutContainer>
        <div className="all_Pokemon" style={allPokemonStyle}>
          {pokemonList}
        </div>
      </LayoutContainer>
    
    );
  }
}

module.exports = Home;