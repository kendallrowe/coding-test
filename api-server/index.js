const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const PORT = process.env.PORT || 3001;

const app = express();

const db = require("./db");

const cats = require("./routes/cats");
const sharks = require("./routes/sharks");

app.listen(PORT, () => {
    app.use(cors());
    app.use(helmet());

    app.use("/api", cats(db));
    app.use("/sharks", sharks(db));

    console.log(`Hi there! I'm listening on ${PORT}`);
});