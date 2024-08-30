const notFound = (req, res, next) => {
  next({
    status: 404,
    message: 'Resource not found',
  });
};

module.exports = {
  notFound,
};
