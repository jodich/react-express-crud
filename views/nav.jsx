var React = require('react');

class NavBar extends React.Component {
  render() {

    const navigationStyle = {
      padding: '20px',
      textAlign: 'center'
    }

    const welcomeStyle = {
      marginTop: '40px',
      textAlign: 'center',
      letterSpacing: '0.15rem'
    }

    const formStyle = {
      display: 'inline-block',
      margin: '0px 30px'
    }

    const inputStyle = {
      backgroundColor: 'white',
      border: '3px solid pink',
      padding: '10px 20px'
    }

    const inputStyle2 = {
      backgroundColor: 'white',
      border: '3px solid SkyBlue',
      padding: '10px 20px'
    }

    return (
      <div className="nav_bar">

      <div className="row">

        <div className="col-2">
        </div>

        <div className="col-8">
          <div className="welcome" style={welcomeStyle}>
            <h1>Hi! Welcome to the online Pokèdex!</h1>
          </div>
        </div>

        <div className="col-2">
        </div>

      </div>





      <div className="row">

        <div className="col-2">
        </div>

        <div className="col-8">
          <div className="navigation" style={navigationStyle}>
          
              <form method="GET" action="/pokemon/edit" style={formStyle}>
                <input type="submit" value="Edit Pokemon" style={inputStyle2}/>
              </form>
              <form method="GET" action="/pokemon/delete" style={formStyle}>
                <input type="submit" value="Delete Pokemon" style={inputStyle2}/>
              </form>

              <form method="GET" action="/pokemon" style={formStyle}>
                <input type="submit" value="Sort By Name" style={inputStyle}/>
                <input type="hidden" name="sortby" value="name"/>
              </form>
          </div>
        </div>

        <div className="col-2">
        </div>

      </div>
      </div>

    
    );
  }
}

module.exports = NavBar;











