import React from 'react';
import Categories from "./Categories";
import './CatCategories.scss'

const CatCategories = ({ categories, requestNewCategoryImages }) => {

    const onHandleSelect = (event) => {
        const categoryId = event.target.id
        requestNewCategoryImages(categoryId)
    }

    return <div className='categories'>
            {categories.map(c =>
                <Categories key={c.id} categories={c} onHandleSelect={onHandleSelect} />
            )}
    </div>
}

export default CatCategories;
