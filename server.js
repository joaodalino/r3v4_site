const express = require('express');
const app = express();
const PORT = 2001;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Bom dia Pikas');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));