import express from 'express';

const routes = express.Router();

routes.get('/', (req, res) => {

    const msg = "Hello World!!!"

    return res.json({message: msg});
});

export default routes;