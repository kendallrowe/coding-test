const router = require("express").Router()

module.exports = db => {
    router.get("/sharks", (req, res) => {
        res.json({"shark": "I am a shark!"})
    });

    return router
};