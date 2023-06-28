const express = require("express");
const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "cricketMatchDetails.db");
const db = null;

const cricketServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("running server at http://localhost:3000");
    });
  } catch (e) {
    console.log(`DB MESSAGE : ${e.message}`);
    process.exit(1);
  }
};

cricketServer();
