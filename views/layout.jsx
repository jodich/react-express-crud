var React = require('react');
var NavBar = require('./nav.jsx');

class LayoutContainer extends React.Component {
  render() {

    return (
      <html>
      <head>
        <title>POKÈDEX</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"/>
      </head>
      <body>
        <div className="container">
          
          <NavBar>
          </NavBar>

          <div className="row">

            <div className="col-2">
            </div>

            <div className="col-8">
              {this.props.children}
            </div>

            <div className="col-2">
            </div>
          
          </div>

        </div>
      </body>
    </html> 
    );
  }
}

module.exports = LayoutContainer;