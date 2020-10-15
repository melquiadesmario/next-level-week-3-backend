import express from 'express';

import './database/connection';

const app = express();

const port = process.env.PORT || 3333;

app.use(express.json());

app.post('/users', (req, res) => {
    return res.json({ message: 'Hello Backend' });
});

app.listen(port, () => console.log(`Server is running on port ${ port }`));