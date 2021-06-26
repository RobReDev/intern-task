import React from 'react'
import { requestNewCategoryImages} from "../../react-redux/categories.reducer";


const Categories = ({ categories, onHandleSelect }) => {

    return  <button className='button' id={categories.id} onClick={onHandleSelect}>
                {categories.name}
            </button>
}

export default Categories