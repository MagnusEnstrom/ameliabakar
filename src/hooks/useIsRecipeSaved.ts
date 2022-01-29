import { useEffect, useState } from "react";


const useIsRecipeSaved = (recipeId: string) => {
    const [isRecipeSaved, setIsRecipeSaved] = useState<boolean>();
    useEffect(() => {
        const checkIfSaved = () => {
            const savedRecipesString = localStorage.getItem('savedRecipes')
            if(savedRecipesString) {
                const recipes = JSON.parse(savedRecipesString) as string[];
                setIsRecipeSaved(recipes.includes(recipeId))
            }
        }
        checkIfSaved();
    }, [])

    return isRecipeSaved;
}

export default useIsRecipeSaved;