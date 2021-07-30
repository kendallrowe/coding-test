const router = require("express").Router()

module.exports = db => {
    router.get("/cats", (req, res) => setTimeout(() => {
            res.json(db.query("cats"))
        }, 1000)
    );

    return router
};