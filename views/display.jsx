var React = require('react');

class Display extends React.Component {
  render() {

    const imgStyle = {
      height: '200px',
      border: '5px solid pink'
    };

    return (
      <html lang="en">
      <head>
        <title>New Pokemon Created!</title>
      </head>
      <body>
        <h1>You created a new Pokemon!</h1>
        <div>ID: {this.props.id}</div>
        <div>NUM: {this.props.num}</div>
        <div>NAME: {this.props.name}</div>
        <div><img style={imgStyle} src={this.props.img} /></div>
        <div>HEIGHT: {this.props.height} cm</div>
        <div>WEIGHT: {this.props.weight} kg</div>
      </body>
      </html>
    );
  }
}

module.exports = Display;