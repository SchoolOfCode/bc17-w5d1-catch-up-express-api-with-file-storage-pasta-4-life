import express from "express";

import {
  getRecipes,
  getRecipeByID,
  createRecipe,
  updateRecipeByID,
  deleteRecipeByID,
} from "./recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

//Get request
app.get("/api/recipes", async (req, res) => {
  try {
    const data = await getRecipes();
    res.status(200).send({ success: true, payload: data });
  } catch (err) {
    res.status(400).send({ success: false, message: err.message });
  }
});

// GET recipe by ID
app.get("/api/recipes/:id", async (req, res) => {
  try {
    const data = await getRecipeByID(req.params.id);
    res.json({ success: true, payload: data });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

app.post("/api/recipes", async (req, res) => {
  try {
    const bodyRequest = await req.body;
    await createRecipe(bodyRequest);
    res.status(200).json({ success: true, payload: bodyRequest });
  } catch (err) {
    console.log(err);
  }
});

//POST a new recipe
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
