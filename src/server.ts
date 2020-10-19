import express from 'express';
import path from 'path';

import './database/connection';

import routes from './routes';

const app = express();

const port = process.env.PORT || 3333;

app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.listen(port, () => console.log(`Server is running on port ${ port }`));