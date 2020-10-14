import express from 'express';

const app = express();

const port = process.env.PORT || 3333;

app.post('/users', (req, res) => {
    console.log(req.query);
    return res.json({ message: 'Hello Backend' });
});

app.listen(port, () => console.log(`Server is running on port ${ port }`));