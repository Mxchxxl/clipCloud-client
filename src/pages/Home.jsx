import { useEffect, useState } from "react"

import Empty from "../components/Empty"
import VideoCard from "../components/VideoCard"
import VideoListWrapper from "../components/VideoListWrapper"
import axios from "axios"

const Home = () =>
{

    const [ videos, setVideos ] = useState( null )

    const fetchVideos = async () =>
    {
        const response = await axios.get( '/api/video/random' )
        // console.log( response.data )
        setVideos( response.data )
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


export default Home