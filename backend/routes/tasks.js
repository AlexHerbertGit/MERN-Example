// Task Routes

const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

router.get("/", async (req, res)=> {
    const tasks = await Task.find();
    res.json(tasks);
});

router.post("/", async (req, res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
});

module.exports = router;