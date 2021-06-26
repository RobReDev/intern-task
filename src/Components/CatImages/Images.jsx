import React from 'react'
import './CatImages.scss'

const Images = ({ images }) => {
    return <img className='img' alt='cat' src={images.url} />
}

export default Images