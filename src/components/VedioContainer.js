import React, { useState , useEffect } from "react";
import {YOUTUBE_API_URL} from "../utils/constants" ;
import VideoCard  from "../components/VideoCard" ;

const VedioContainer =() =>  {
    const [videos, setVideos] = useState([])


    const getVideos = async ()=> {
        const data = await fetch(YOUTUBE_API_URL) ;
        const json= await data.json() ;
        console.log(json)
        setVideos(json.items)
        

    }
    useEffect(
        getVideos
     , [])

    return  (
        <>
        <div className="flex flex-wrap" >
           { videos?.map(video => 
           <VideoCard  key= {video.id} info={video}/>
           )}
         
        </div>
        </>
    )
}

export default VedioContainer ;