const router = require("express").Router()

module.exports = db => {
    // Return sharks json with a set timeout of 1000ms to simulate
    // database query times. This enables use of loading visual state
    // per requirements
    router.get("/sharks", (req, res) => setTimeout(() => {
            res.json(db.query("sharks"))
        }, 1000)
    );

    return router
};