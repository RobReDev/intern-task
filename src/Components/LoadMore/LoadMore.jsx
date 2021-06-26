import React from 'react'
import './LoadMore.scss'

const LoadMore = ({ loadMoreImages }) => {
    const onHandleLoad = () => {
        loadMoreImages()
    }
    return <div className='load-more-wrapper'>
        <button className='load-more' onClick={onHandleLoad}>Load More</button>
    </div>
}

export default LoadMore