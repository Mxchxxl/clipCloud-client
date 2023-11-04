import { useEffect, useState } from "react"

import Empty from "../components/Empty"
import VideoCard from "../components/VideoCard"
import VideoListWrapper from "../components/VideoListWrapper"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Subscriptions = () =>
{
    const [ videos, setVideos ] = useState( [] )
    const { user } = useSelector( state => state.user )
    const Navigate = useNavigate()



    const fetchVideos = async () =>
    {
        const response = await axios.get( '/api/video/subscribed' )
        // console.log( response.data )
        setVideos( response.data )
    }

    useEffect( () =>
    {
        if ( !user )
        {
            Navigate( '/' )
            return
        }
        fetchVideos()
    } )

    return (


        <VideoListWrapper >
            {videos?.length >= 1 ?
                videos.map( ( object, index ) =>
                    <VideoCard key={`video-${ index }`} video={object} />
                )
                : <Empty />
            }

        </VideoListWrapper>
    )
}


export default Subscriptions