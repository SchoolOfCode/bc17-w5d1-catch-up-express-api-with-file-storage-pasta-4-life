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
export async function getRecipeByID(id) {
  try {
    const data = await  fs.readFile(fileName, "utf8");
    const jsonData = JSON.parse(data);
    const recipeId = jsonData.filter((item) => item.id === id)
    if (!data) {
      throw new Error('Recipe not available');
    }
    return data;
  }  catch (err) { 
    console.error(`Error finding recipe by ID (${id})):` + err);
    throw err;
  }
}
  
// CREATE A RECIPE
export async function createRecipe(newRecipe) {}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
