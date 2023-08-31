const express = require('express');

const app = express();
const axios = require('axios');
const port = 3000;
const token = "cFW9sfEUQbuUSsLW5DvQJo:APA91bEHlMzn8_8rETwtT0lbMv1Lw47WAnvTbPVUNCru26wHr_Cx7zTW5JirmbijCCNHRMfjdrZVgkuQyEIKmPKZf4sVzbKgvexUJXoE1fGB39124UlbdIEbDhryP6E2obnGVFhSG1tC";
app.use(express.json());
app.use("/api", require("./routes/index.routes"));
app.use(express.urlencoded({ extended: true }));

setInterval(() => {
    axios.post('http://localhost:3000/api/send', { 'token': token });
}, 5000);

app.listen(port, () => {

    console.log(`\nServer is running on http://127.0.0.1:${port}\n`);
});