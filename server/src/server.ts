import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {

    const msg = "Hello World!!!"

    return res.json({message: msg});
});

app.listen(3333);