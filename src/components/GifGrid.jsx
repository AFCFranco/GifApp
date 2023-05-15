
import { useEffect, useMemo, useState } from "react"
import { GifItem } from "./GifItem"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GifGrid = ({ category }) => {
    const {images}=useFetchGifs(category)
    //console.log({images,isLoading})
    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map(image =>
                        <GifItem key={image.id}
                            {...image}
                        />    // la estructura { ...Image } exparse todas las propiedades de Image al GifItem               
                    )
                }
            </div>
        </>
    )
}