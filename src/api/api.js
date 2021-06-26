import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
})

export const catImagesAPI = {
    getImages() {
        return instance.get('images/search?limit=10&page=1&category_ids=1 ')
    },
    getCategories() {
        return instance.get('categories')
    },
    getSelectedCategoryImages(categoryId) {
        return instance.get(`images/search?limit=10&page=1&category_ids=${categoryId}`)
    },
}

