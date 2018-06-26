var React = require('react');
var FormLayoutContainer = require('./formlayout.jsx');

class Delete extends React.Component {
  render() {

    const formStyle = {
      marginTop: '10px'
    }

    const inputStyle = {
      textAlign: 'center',
      marginTop: '40px',
      padding: '5px',
      fontSize: '0.8rem',
      width: '70%',
      backgroundColor: 'white',
      border: 'none',
      borderBottom: '3px solid SkyBlue',
      padding: '10px 20px'
    }

    const submitStyle = {
      marginTop: '20px',
      width: '40%',
      backgroundColor: 'white',
      border: '0px solid SkyBlue',
      padding: '10px 20px'
    }

    return (
      <FormLayoutContainer>
        <h1>Delete a Pokemon? :(</h1>
        <form method="POST" action="/pokemon?_method=DELETE" style={formStyle}>
          <input type="text" name="id" placeholder="INPUT POKEMON ID" style={inputStyle} /><br/>
          <input type="submit" value="Submit" style={submitStyle}/>
        </form>
      </FormLayoutContainer>
    );
  }
}

module.exports = Delete;