import React from 'react';
import Images from "./Images";
import './CatImages.scss'

const CatImages = ({images}) => {
    return <div className='images'>
        <div className='image-wrapper'>
            {images.map(i =>
                <Images key={i.id} images={i}/>
            )}
        </div>
    </div>
}

export default CatImages;
