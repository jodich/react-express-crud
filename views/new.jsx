var React = require('react');

class New extends React.Component {
  render() {

    return (
      <html lang="en">
      <head>
        <title>Create a New Pokemon</title>
      </head>
      <body>
        <form method="POST" action="/pokemon">
          <h1>Create a New Pokemon</h1>
          ID: <input type="text" name="id" /><br/>
          NUM: <input type="text" name="num" /><br/>
          NAME: <input type="text" name="name" /><br/>
          IMG: <input type="text" name="img" /><br/>
          HEIGHT: <input type="text" name="height" /><br/>
          WEIGHT: <input type="text" name="weight" /><br/>
          <input type="submit" value="Submit" />
        </form>
      </body>
      </html>
    );
  }
}

module.exports = New;