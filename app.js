require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
//const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const schema = require('./graphql/executable');
const api = require('./routes/api');

const { graphqlExpress, graphiqlExpress } = require('graphql-server-express');
const { mongoDB } = require('./config');

const app = express();


//connexion to db with mongoose
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use('/api', api);
app.use('/movies', bodyParser.json(), graphqlExpress({ schema }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send();
});

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/movies',
}));

module.exports = app;



