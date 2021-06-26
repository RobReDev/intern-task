import {catImagesAPI} from "../api/api";

const SET_IMAGES = 'IMAGES/SET_IMAGES'
const SELECT_CATEGORY = 'SELECT_CATEGORY'
const LOAD_MORE = 'LOAD_MORE'

const initialState = {
    images: [],
}

export const imagesReducer = (state = initialState, action) => {
    switch (action.type){
        case SET_IMAGES:
            return {
                ...state, images: action.images
            }
        case SELECT_CATEGORY:
            return {
                ...state, images: action.images
            }
        case LOAD_MORE:
            return {
                ...state, images: state.images.concat(action.images)
            }
        default:
            return state
    }
}

const setImages = (images) => ({ type: SET_IMAGES, images})
const changeToNewCategories = (images) => ({ type: SELECT_CATEGORY, images})
const onLoadMore = (images) => ({ type: LOAD_MORE, images})

export const requestImages = () =>  async (dispatch) => {
   const data = await catImagesAPI.getImages()
        .then(res => res.data)
    dispatch(setImages(data))
}

export const requestNewCategoryImages = (categoryId) => async (dispatch) => {
    const data = await catImagesAPI.getSelectedCategoryImages(categoryId)
        .then(res => res.data)
    dispatch(changeToNewCategories(data))
}

export const loadMoreImages = () => async (dispatch) => {
    const data = await catImagesAPI.getImages()
        .then(res => res.data)
    dispatch(onLoadMore(data))
}
