const { Router} = require("express");

const usersRoutes = Router();

usersRoutes.post("/", (req, res) => {
    const { name, email, password } = req.body;
    
    response.json( {name, email, password})
})

modules.exports = usersRoutes;