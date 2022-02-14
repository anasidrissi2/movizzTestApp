export const ADD_FAVORITE = "ADD_FAVORITE"

export const DELETE_FAVORITE = "DELETE_FAVORITE"


export const addFavoriteAction = (data) => ({
    data,
    type: ADD_FAVORITE,
})

export const deleteFavoriteAction = (data) => ({
    data,
    type: DELETE_FAVORITE,
})