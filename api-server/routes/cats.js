const router = require("express").Router()

module.exports = db => {
    // Return cats json with a set timeout of 1000ms to simulate
    // database query times. This enables use of loading visual state
    // per requirements
    router.get("/cats", (req, res) => setTimeout(() => {
            res.json(db.query("cats"))
        }, 1000)
    );

    return router
};