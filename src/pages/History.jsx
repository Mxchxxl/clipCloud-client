import { useEffect, useState } from "react"

import Empty from "../components/Empty"
import VideoCard from "../components/VideoCard"
import VideoListWrapper from "../components/VideoListWrapper"
import db from "../db"

// import { useNavigate } from "react-router-dom"
// import { useSelector } from "react-redux"

const History = () =>
{
    const [ videos, setVideos ] = useState( null )
    //locally store viewed videos



    const fetchVideos = async () =>
    {
        const videos = await db.table( 'watchedVideos' ).toArray()
        // console.log( response.data )
        console.log( videos )
        setVideos( videos )
    }

    useEffect( () =>
    {
        console.log( 'yooo' )

        fetchVideos()
    }, [] )

    return (
        <VideoListWrapper >
            {videos?.length >= 1 ? (
                videos.map( ( object, index ) =>
                    <VideoCard key={`video-${ index }`} video={object} />
                )
            ) : (
                <Empty />
            )
            }

        </VideoListWrapper>
    )
}

export default History