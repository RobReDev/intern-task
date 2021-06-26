import './App.scss';
import CatImages from "./Components/CatImages/CatImages";
import {useEffect} from "react";
// import {catImagesAPI} from './api/api'
import {connect} from "react-redux";
import {loadMoreImages, requestImages, requestNewCategoryImages} from "./react-redux/images.reducer";
import {requestCategories} from "./react-redux/categories.reducer";
import CatCategories from "./Components/CatCategories/CatCategories";
import LoadMore from "./Components/LoadMore/LoadMore";

const App = ({images, categories, requestImages, requestCategories, requestNewCategoryImages, loadMoreImages}) => {
    useEffect(() => {
        requestImages()
        requestCategories()
    }, [])
    return <>
        <div className="App">
            <CatCategories categories={categories} requestNewCategoryImages={requestNewCategoryImages} />
            <CatImages images={images}/>
        </div>
        <LoadMore loadMoreImages={loadMoreImages}/>
    </>
}

const mapState = (state) => {
    return {
        images: state.catImages.images,
        categories: state.catCategories.categories
    }
}

export default connect(mapState, {
    requestImages,
    requestCategories,
    requestNewCategoryImages,
    loadMoreImages
})(App);
