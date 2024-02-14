const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'frontend')));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
