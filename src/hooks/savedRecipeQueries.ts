import { useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'

const savedRecipesStorageKey = 'savedRecipes'

const savedRecipesKeys = {
    all: ['savedRecipes'] as const,
    list: () => [...savedRecipesKeys.all, 'list'] as const,
    ids: () => [...savedRecipesKeys.all, 'savedRecipes', 'id'] as const,
    id: (id: string) => [...savedRecipesKeys.ids(), id] as const,
}

const useToggleRecipe = () => {
    const queryClient = useQueryClient()
    const save = (recipeId: string, recipes: string[]) => {
        const recipesToSave = [...recipes, recipeId]

        localStorage.setItem(
            savedRecipesStorageKey,
            JSON.stringify(recipesToSave)
        )
    }
    const remove = (recipeId: string, recipes: string[]) => {
        const recipesToSave = [...recipes].filter(recipe => recipe !== recipeId)
        localStorage.setItem(
            savedRecipesStorageKey,
            JSON.stringify(recipesToSave)
        )
    }

    const toggleSavedRecipe = async (recipeId: string) => {
        const savedRecipesString = localStorage.getItem(savedRecipesStorageKey)
        let recipes: string[] = []
        if (savedRecipesString) {
            recipes = JSON.parse(savedRecipesString) as string[]
        }
        if (recipes.includes(recipeId)) {
            return remove(recipeId, recipes)
        }
        return save(recipeId, recipes)
    }
    const { mutate: toggle } = useMutation({
        mutationFn: toggleSavedRecipe,
        onSettled: () => {
            queryClient.invalidateQueries(savedRecipesKeys.all)
        },
    })

    return toggle
}

const getSavedRecipesIds = () => {
    const storageString = localStorage.getItem(savedRecipesStorageKey)
    if (!storageString) return []
    return JSON.parse(storageString) as string[]
}

const useGetSavedRecipes = () => {
    return useQuery({
        queryKey: savedRecipesKeys.list(),
        queryFn: () => getSavedRecipesIds(),
    })
}

const useGetCountOfSavedRecipes = () => {
    const { data } = useQuery({
        queryKey: savedRecipesKeys.list(),
        queryFn: () => getSavedRecipesIds(),
    })
    return data?.length || 0
}

const useIsRecipeSaved = (recipeId: string) => {
    const { data } = useGetSavedRecipes()
    return !!data?.includes(recipeId)
}

export {
    useToggleRecipe,
    useGetSavedRecipes,
    useGetCountOfSavedRecipes,
    useIsRecipeSaved,
}
