import express from 'express';
const routes = express.Router();

routes.post('/', (req, res) => {
    const { username, password} = req.body;
    


});

export default  routes;