const express = require("express");
// const db = require("../db/dbConfig");

const snacks = express.Router();
const {healthyCheck } = require("../healthy")
const { getAllSnacks, getSnack, createSnack, updateSnack, deleteSnack } = require("../queries/snacks.js");

snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json({ payload: allSnacks, success: true });
  } else {
    res.status(500).json({payload: 'not found', success: false, error: "error"});
  }
});


snacks.post("/", async (req, res) => {
  try {
    const snack = await createSnack(req.body);
    res.json({ payload: snack, success: true });
  } catch (error) {
    res.status(400).json({payload: 'not found', success: false, error: "error"})
  }
});

snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSnack = await updateSnack(req.body, id);
    res.status(200).json(updatedSnack);
  } catch (error) {
    return res.status(422).json({ error: "error" })
  }
});

snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.json({ payload: deletedSnack, success: true });
  } else {
    res.status(422).json({payload: 'not found', success: false, error: "error"
  });
}
});

snacks.get("/:id", async (req, res) => {
  const { id } = req.params
  const snack = await getSnack(id);
  if (snack) {
    res.json({ payload: snack, success: true });
  } else {
    res.status(404).json({ payload: 'not found', success: false, error: "error"
    });
  }
});



module.exports = snacks;