const router = require("express").Router()

module.exports = db => {
    router.get("/sharks", (req, res) => setTimeout(() => {
            res.json(db.query("sharks"))
        }, 1000)
    );

    return router
};