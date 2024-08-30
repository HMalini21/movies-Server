const express = require('express');
// const config = require('./config');
const cors = require('cors');
const app = express();
const moviesRouter = require('./routes/moviesRouter');
const categoryRouter = require('./routes/categoryRouter');
const { errorHandler } = require('./middlewares/errorHandle.middleware');
const { notFound } = require('./middlewares/notFound.middleware');

app.use(express.json());
app.use(cors());

//routers
app.use('/netflix', categoryRouter);
app.use('/movies', moviesRouter);

//404error
app.use(notFound);
//errrohandler
app.use(errorHandler);

app.listen(2022, () => {
  console.log(`http://localhost:${2022}`);
});
