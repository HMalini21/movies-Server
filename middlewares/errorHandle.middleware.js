const errorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || ['An unkown error'],
  });
};

module.exports = {
  errorHandler,
};
