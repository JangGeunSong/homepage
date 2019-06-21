const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5500;

app.listen(port, () => console.log(`server is running at the ${port}`));