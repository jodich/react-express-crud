var React = require('react');
var FormLayoutContainer = require('./formlayout.jsx');

class Edit extends React.Component {
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
        <h1>Edit a Pokemon</h1>
        <form method="POST" action="/pokemon?_method=PUT" style={formStyle}>
          <input type="text" name="id" placeholder="ID" style={inputStyle}/><br/>
          <input type="text" name="num" placeholder="NUMBER" style={inputStyle}/><br/>
          <input type="text" name="name" placeholder="NAME" style={inputStyle}/><br/>
          <input type="text" name="img" placeholder="IMG LINK" style={inputStyle}/><br/>
          <input type="text" name="height" placeholder="HEIGHT" style={inputStyle}/><br/>
          <input type="text" name="weight" placeholder="WEIGHT" style={inputStyle}/><br/>
          <input type="submit" value="Submit" style={submitStyle}/>
        </form>
      </FormLayoutContainer>

    );
  }
}

module.exports = Edit;