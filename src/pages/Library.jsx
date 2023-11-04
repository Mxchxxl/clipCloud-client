import { useEffect, useState } from "react"

import Empty from "../components/Empty"
import VideoCard from "../components/VideoCard"
import VideoListWrapper from "../components/VideoListWrapper"
import db from "../db"

const Library = () =>
{
    const [ videos, setVideos ] = useState( null )




    const fetchVideos = async () =>
    {
        const videos = await db.table( 'savedVideos' ).toArray()
        // console.log( response.data )
        setVideos( videos )
    }

    useEffect( () =>
    {


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

export default Library