import express from 'express';
import logger from 'morgan';

const app = express();

// middleware
app.use(logger('dev'));

// error handler
app.use((req, res, next) => {
  res.status(404).send('404err');
});

app.use((err, req, res, next) => {
  res.status(500).send('500err');
});

// server
const options = {
  host: process.env.NODE_HOST || 'localhost',
  port: process.env.NODE_PORT || 3000,
};

app.listen(options, () =>
  console.log(`server on!!! ${options.host}:${options.port}`)
);
