/**
 * Need to require Express!
 */

const express = require('express');
/**
 * We need hbs
 */

const hbs = require('hbs');

/**
 * Create the app Object
 */

const app = express();

// App configuration

/**
 * Specify the path of the static files
 */
app.use(express.static(__dirname + '/public'));

/**
 * Telling hbs where the partials are located
 */

hbs.registerPartials(__dirname + '/views/partials');

/**
 * Set the templating engine
 */
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  res.locals.hbs = 'powerful and easy to use';
  next();
});

/**
 * Routes are just below !
 */

app.get('/', (req, res) => {
  res.render('homepage');
});

app.get('/characters', async (req, res) => {
  const rawResponse = await fetch('https://rickandmortyapi.com/api/character');
  const data = await rawResponse.json();
  const characters = data.results;
  console.log(characters);
  console.log(`Retrieved ${characters.length} characters!`);

  res.render('characters', { characters: characters });
});

app.get('/general', (req, res) => {

  res.locals.isAdmin = true;

  res.render('general', {

    cat: { name: 'Illiou', age: '4months', isCute: 'very true' }

  });
});


/**
 * The server need to listen to some port
 */

app.listen(3000, () => console.log(`Server is running on http://localhost:3000`));