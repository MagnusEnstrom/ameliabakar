import { useEffect, useState } from "react";

const useSaveRecipe = () => {
    const save = (recipeId: string, recipes: string[]) => {
        const recipesToSave = [...recipes, recipeId];

        localStorage.setItem('savedRecipes', JSON.stringify(recipesToSave))
    }
    const remove = (recipeId: string, recipes: string[]) => {
        const recipesToSave = [...recipes].filter(recipe => recipe !== recipeId);
        localStorage.setItem('savedRecipes', JSON.stringify(recipesToSave))
    }

    const toggle = (recipeId: string) => {
        const savedRecipesString = localStorage.getItem('savedRecipes')
        let recipes: string[] = []
        if(savedRecipesString) {
            recipes = JSON.parse(savedRecipesString) as string[];
        }
        if(recipes.includes(recipeId)) {
            remove(recipeId, recipes)
            return false
        }
        save(recipeId, recipes)
        return true;
    }
    return toggle;
}

export default useSaveRecipe;