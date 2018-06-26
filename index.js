const express = require('express');
const jsonfile = require('jsonfile');
const methodOverride = require('method-override');
const FILE = 'pokedex.json';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

const reactEngine = require('express-react-views').createEngine();
app.engine('jsx', reactEngine);

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
 
 // ================================


app.get('/pokemon/new', (req, res) => {
  res.render('new');
});

app.get('/pokemon/edit', (req, res) => {
  res.render('edit');
});

app.get('/pokemon/delete', (req, res) => {
  res.render('delete');
});

app.get('/pokemon', (request, response) => {

  jsonfile.readFile(FILE, (err, obj) => {

    let pokemons = obj.pokemon;
  
    if (request.query.sortby == "name") {

      pokemons.sort( (a, b) => {
        if (a.name < b.name)
          return -1;
        if (b.name < a.name)
          return 1;
        return 0;
      });

      const context = {
        all_Pokemon: pokemons
      };

      response.render('sortbyname', context);

    } else {
      response.send(obj)
    }

  })
});


app.get('/:id', (request, response) => {

  jsonfile.readFile(FILE, (err, obj) => {
    let inputId = request.params.id;

    let pokemon = obj.pokemon.find((currentPokemon) => {
      return currentPokemon.id === parseInt(inputId, 10);
    });

    if (pokemon === undefined) {

      response.status(404);
      response.send("not found");
    } else {

      response.send(pokemon);
    }
  });
});


app.get('/', (request, response) => {

  jsonfile.readFile(FILE, (err, obj) => {

    const pokemons = obj.pokemon;

    const context = {
      all_Pokemon: pokemons
    };

    response.render('home', context)
  });

});





app.post('/pokemon', (req, res) => {

  let data = req.body;

  // making id a number instead of string
  let id = parseInt(data['id']);
  data['id'] = id;

  res.render('display', data);
});

// edit pokemon, input existing ID to edit
app.put('/pokemon', (request, response) => {

  console.log('updated stuff');

  // what is the id to edit
  // find the object with that id in the database
  // replace all information in that object

  let editPokemon = request.body;

  // making id a number instead of string
  let id = parseInt(editPokemon['id']);
  editPokemon['id'] = id;

  jsonfile.readFile(FILE, (err, obj) => {

    let pokemons = obj.pokemon;
    
    // finds the pokemon with the matching id
    let pokemonReplace = pokemons.find((currentPokemon) => {
      return currentPokemon.id == editPokemon.id
    });

    // if id not found, request.body will be appended to the end of the array
    // alternatively, I could add an if pokemonReplace === undefined condition to check for
    // the validity of pokemonReplace.
    // Case: if pokemonReplace === undefined, request.send(no pokemon, you should add pokemon instead)

    // replace old object with new object
    let indexToReplace = pokemons.indexOf(pokemonReplace);
    pokemons.splice(indexToReplace, 1, editPokemon);

    response.send(pokemons);
  });
});

// delete pokemon, input existing ID to delete
app.delete('/pokemon', (request, response) => {

  console.log('deleted stuff');

  // what is the id to delete
  // find the object with that id in the database
  // remove that object

  let deletePokemon = request.body

  // making id a number instead of string
  let id = parseInt(deletePokemon['id']);
  deletePokemon['id'] = id;

  jsonfile.readFile(FILE, (err, obj) => {

    let pokemons = obj.pokemon;

    let pokemonRemove = pokemons.find((currentPokemon) => {
      return currentPokemon.id === deletePokemon.id
    });

    if (pokemonRemove == undefined) {
      response.send('ID not found');

    } else {
      let indexToRemove = pokemons.indexOf(pokemonRemove);
      pokemons.splice(indexToRemove, 1);
      response.send(pokemons);

    }

  });
});


/**
 * ===================================
 * Listen to requests on port 3000
 * ===================================
 */
app.listen(3000, () => console.log('~~~ Tuning in to the waves of port 3000 ~~~'));
