import express from 'express';
import { getRepository } from 'typeorm'

import Orphanage from './models/Orphanage';

import './database/connection';

const app = express();

const port = process.env.PORT || 3333;

app.use(express.json());

app.post('/orphanages', async (req, res) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    } = req.body;

    const orphanagesRepository = getRepository(Orphanage);

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends
    })

    await orphanagesRepository.save(orphanage);

    return res.json(orphanage);
});

app.listen(port, () => console.log(`Server is running on port ${ port }`));