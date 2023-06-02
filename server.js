const express = require('express');
const app = express();
const apiRoutes = require('./Develop/routes/apiRoutes')
const htmlRoutes = require('./Develop/routes/htmlRoutes')
const PORT = process.env.PORT || 3001

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});