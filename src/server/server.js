const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

// Test PostgreSQL connection
app.get("/api/test", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({
            success: true,
            message: "PostgreSQL connected successfully",
            time: result.rows[0]
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Database connection failed"
        });
    }
});

// Get portfolio data
app.get("/api/portfolio", async (req, res) => {
    try {
        const result = await pool.query(
            "SELECT * FROM portfolio ORDER BY id DESC"
        );

        res.json(result.rows);
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to get portfolio data"
        });
    }
});

// Save contact information
app.post("/api/contact", async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const result = await pool.query(
            `INSERT INTO contacts (name, email, message)
             VALUES ($1, $2, $3)
             RETURNING *`,
            [name, email, message]
        );

        res.status(201).json({
            success: true,
            data: result.rows[0]
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to save contact"
        });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`API running at http://localhost:${process.env.PORT}`);
});