const express = require("express");
require("dotenv").config()
const cors = require("cors")
const pool = require("./db.js")
const app = express();

const PORT = process.env.PORT || 8000;

// middlewares 
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
    res.send("<h1>Server is working fine ..... </h1>")
})

app.post("/register", async (req, res) => {
    const { full_name, gmail, year, mobile_number, qualification, clg_name, password, skills } = req.body;
    try {
        // DUMMY....
        const newUser = await pool.query("INSERT INTO mentees ( full_name, gmail, year, mobile_number, qualification, clg_name, password, skills) VALUES ( $1 ,$2 , $3 , $4 ,$5 , $6, $7,$8 )", [full_name, gmail, year, mobile_number, qualification, clg_name, password, skills]);

        res.json({ message: "user registered :) ", newUser });
    }
    catch (error) {
        console.log(error)
    }
})
// console.log(pool)

app.listen(PORT, () => console.log(`App is running on http://localhost:${PORT}`))






