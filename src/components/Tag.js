import axios from 'axios';
import React, { useEffect, useState } from 'react'
import useGif from '../hooks/useGif';
import Spinner from './Spinner';

   const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {

    const [tag,setTag] = useState("car");
    const {gif, loading, fetchData} = useGif(tag);

  return (
    <div  className='w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>Random {tag} Gif</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} width={450}/>) 
        }

        <input 
            className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
            onChange= {(event) => setTag(event.target.value)} />
        
        <button onClick={(tag) => fetchData(tag)} 
        className='bg-blue-200 rounded-lg w-10/12 text-lg py-2 mb-[20px]'>
            Generate GIF 
        </button>
    </div>
  )
}

export default Tag