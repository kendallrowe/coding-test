const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

const db = require("./db");

const cats = require("./routes/cats");
const sharks = require("./routes/sharks");

app.listen(PORT, () => {
    app.use(express.static(path.resolve(__dirname, '../client/build')));
    app.use(cors());
    app.use(helmet());

    app.use("/api", cats(db));
    app.use("/api", sharks(db));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
    });

    console.log(`Hi there! I'm listening on ${PORT}`);
});