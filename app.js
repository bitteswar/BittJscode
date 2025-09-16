const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Hello from AWS Elastic Beanstalk! 🚀");
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
