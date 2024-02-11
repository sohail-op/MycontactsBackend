const { constant } = require("../constant");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  switch (statusCode) {
    case constant.VALIDATION_ERROR:
      res.json({
        Title: "Validation Error",
        Message: err.Message,
        StackTrace: err.stackTrace,
      });
      break;

    case constant.UNAUTHORIZED:
      res.json({
        Title: "Unauthorized",
        Message: err.Message,
        StackTrace: err.stackTrace,
      });
      break;

    case constant.FORBIDDEN:
      res.json({
        Title: "Forbidden",
        Message: err.Message,
        StackTrace: err.stackTrace,
      });
      break;

    case constant.NOT_FOUND:
      res.json({
        Title: "Not found",
        Message: err.Message,
        StackTrace: err.stackTrace,
      });
      break;

    case constant.SERVER_ERROR:
      res.json({
        Title: "Server Error",
        Message: err.Message,
        StackTrace: err.stackTrace,
      });
      break;

    default:
      console.log("No Error, Every Thing Working Fine");

      break;
  }
};

module.exports = errorHandler;
