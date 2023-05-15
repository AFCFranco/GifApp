import { useState,useEffect } from "react"
import { getGifs } from "../helpers/getGifs"





export const useFetchGifs = (category) => {  // los hooks son solo funciones que regresan algo
    const [images, setImages] = useState([])
    let isLoading=true;

    const getImages = async () => {
        const newImages = await getGifs(category)
        setImages(newImages)
        isLoading=false
    }
  
    getImages()

    return {
        images: images,
        isLoading: isLoading
    }



}