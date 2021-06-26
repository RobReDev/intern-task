import {catImagesAPI} from "../api/api";

const SET_CATEGORIES = 'CATEGORIES/SET_CATEGORIES'
const initialState = {
    categories: []
}

export const categoriesReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_CATEGORIES:
            return {
                ...state, categories: action.categories
            }
        default:
            return state
    }
}

const setCategories = (categories) => ({ type: SET_CATEGORIES, categories})

export const requestCategories = () =>  async (dispatch) => {
    const data = await catImagesAPI.getCategories()
        .then(res => res.data)
    dispatch(setCategories(data))
}

