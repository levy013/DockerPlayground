const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`App Listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.send("Docker Demo - 2 (v0.0.2)");
});