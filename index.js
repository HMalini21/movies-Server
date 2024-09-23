const express = require('express');
// const config = require('./config');
const cors = require('cors');
const app = express();
const moviesRouter = require('./routes/moviesRouter');
const categoryRouter = require('./routes/categoryRouter');
const UserRouter = require('./routes/UserRouter');
const genreRouter = require('./routes/genreRouter');
const { errorHandler } = require('./middlewares/errorHandle.middleware');
const { notFound } = require('./middlewares/notFound.middleware');
app.use(express.json());
app.use(cors());

//routers
app.use('/netflix', categoryRouter);
app.use('/movies', moviesRouter);
app.use('/user', UserRouter);
app.use('/genres', genreRouter);

//404error
app.use(notFound);
//errrohandler
app.use(errorHandler);

app.listen(2022, () => {
  console.log(`http://localhost:${2022}`);
});
