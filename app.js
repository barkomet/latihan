const express = require("express");
const app = express();
app.use((req, res, next) => {
  res.status(200).json({
    code: "01",
    message: "Restfull nodejs dan express",
  });
});
module.exports = app;
