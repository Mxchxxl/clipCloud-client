import { useEffect, useState } from "react"

import Empty from "../components/Empty"
import VideoCard from "../components/VideoCard"
import VideoListWrapper from "../components/VideoListWrapper"
import axios from "axios"
import { useParams } from "react-router-dom"

const Category = () =>
{

    const { category } = useParams()
    // console.log( category )


    const [ videos, setVideos ] = useState( null )

    const fetchVideos = async () =>
    {
        const response = await axios.get( `/api/video/tag?tags=${ category },` )
        console.log( response.data )
        setVideos( response.data )
    }

    useEffect( () =>
    {
        fetchVideos()
    }, [ category ] )




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

export default Category