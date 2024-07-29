import { readFile } from "node:fs";
import fs from "node:fs/promises";
import { v4 as uuidv4 } from "uuid";

const fileName = "recipes.json";

// GET ALL RECIPES
export async function getRecipes() {
  try {
    //Get data from file
    const data = await fs.readFile(fileName, "utf8");
    //Parse it to JSON
    const jsonData = JSON.parse(data);
    return jsonData;
  } catch (err) {
    console.log("Error getting data: " + err);
  }
}

// GET A RECIPE BY ID
export async function getRecipeByID(id) {}

// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
