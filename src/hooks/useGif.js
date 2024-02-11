import React from 'react'
import tag from '../components/Tag';
import { useState, useEffect } from 'react';
import axios from 'axios';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;



const useGif = (tag) => {
    
    const [gif,setGif] = useState("");
    const [loading, setLoading] = useState(false);
    const randomMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`;
    const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    
    async function fetchData(tag){
        setLoading(true);

        const {data} = await axios.get(tag ? tagMemeUrl : randomMemeUrl);
        const imageSource = data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
    }

    useEffect( () => {
        fetchData('car');
    }, [])

    return {gif, loading, fetchData};
}

export default useGif