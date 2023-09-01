const express = require('express');

const app = express();
const axios = require('axios');
const port = 3000;
require('dotenv').config()


const token = process.env.USER1_TOKEN;
const token2 = process.env.USER2_TOKEN;
app.use(express.json());
app.use("/api", require("./routes/index.routes"));

// console.log(token2);
setInterval(() => {
    axios.post('http://localhost:3000/api/send/' + token);
    axios.post('http://localhost:3000/api/send/' + token2);
}, 5000);

app.listen(port, () => {

    console.log(`\nServer is running on http://127.0.0.1:${port}\n`);
});