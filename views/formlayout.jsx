var React = require('react');

class FormLayoutContainer extends React.Component {
  render() {

    const headerStyle = {
      textAlign: 'center',
      marginTop: '40px'
    }

    return (
      <html lang="en">
      <head>
        <title>POKÈDEX</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous"/>
      </head>
      <body>
      <div className="container">
        <div className="row">


          <div className="col-3">
          </div>

          <div className="col-6" style={headerStyle}>
            {this.props.children}
          </div>

          <div className="col-3">
          </div>


        </div>
      </div>
      </body>
      </html>
    );
  }
}

module.exports = FormLayoutContainer;