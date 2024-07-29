import { readFile, writeFile } from "node:fs";
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
    const data = await fs.readFile(fileName, "utf8");
    const jsonData = JSON.parse(data);
    const recipeId = jsonData.filter((item) => item.id === id);
    if (!data) {
      throw new Error("Recipe not available");
    }
    return data;
  } catch (err) {
    console.error(`Error finding recipe by ID (${id})):` + err);
    throw err;
  }
}

// {
//     "id": "4c848d48-b81e-4d6f-b45d-7b3090f4f8ef",
//     "title": "Beans on Toast",
//     "ingredients": ["150g of beans", "150g of butter", "150g of toast"],
//     "instructions": "Put the butter in your mouth, wait 2 seconds to allow slight melting. Then follow with the toast. Swish around for 10-15 seconds to allow even coating of butter on the toast. Then add the beans, slowly.\n  \n    Season to taste.",
//     "image": "https://natashaskitchen.com/wp-content/uploads/2019/04/Best-Burger-4-500x375.jpg"
//   }

// CREATE A RECIPE
export async function createRecipe(newRecipe) {
  try {
    const data = await fs.readFile(fileName, "utf8");
    const stringifiedData = JSON.parse(data);

    //     {
    //         "title": "Pizzaa"
    //    }

    const newObject = {
      id: uuidv4(),
      ...newRecipe,
    };
    console.log(newObject);

    stringifiedData.push(newObject);

    await fs.writeFile(fileName, JSON.stringify(stringifiedData));

    return newObject;
  } catch (err) {
    console.log(err);
  }
}

// UPDATE A RECIPE BY ID
export async function updateRecipeByID(id, updatedRecipe) {}

// DELETE A RECIPE BY ID
export async function deleteRecipeByID(id) {}
