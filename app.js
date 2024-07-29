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
    res.status(400).send("Error fetching data: " + err);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
