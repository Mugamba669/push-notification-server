const express = require('express');

const app = express();
const axios = require('axios');
const port = 3000;
require('dotenv').config()

const token = process.env.USER_TOKEN;
app.use(express.json());
app.use("/api", require("./routes/index.routes"));
app.use(express.urlencoded({ extended: true }));
console.log(token);
setInterval(() => {
    axios.post('http://localhost:3000/api/send', { 'token': token });
}, 5000);

app.listen(port, () => {

    console.log(`\nServer is running on http://127.0.0.1:${port}\n`);
});