const router = require("express").Router()

module.exports = db => {
    router.get("/cats", (req, res) => {
        res.json({"cat": "I am a cat!"})
    });

    return router
};