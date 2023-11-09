import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([])

    const getImages = async() => {
        const newImages = await getGifs(category)
        setImages(category)
    }

    useEffect(() => {
       getImages()
    }, [])

    return {
        images,
        isLoading: true
    }
}
