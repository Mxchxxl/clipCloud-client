import { useEffect, useState } from "react"

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from "react-router-dom"
import axios from "axios"
import { timeSinceUpload } from "../util"

const VideoCard = ( { video } ) =>
{
    const [ userChannel, setUserChannel ] = useState( {} )

    const getChannelDetails = async () =>
    {
        const response = await axios.get( `/api/user/find/${ video.userId }` )
        setUserChannel( response.data )
    }
    // console.log( video )

    useEffect( () =>
    {
        getChannelDetails()
    }, [] )

    return (
        <Link className="no-underline inline-block  m-2 max-w-[288px] mb-10" to={`/video/${ video._id }`}>
            <div>
                <video src={`${ video.imgUrl }`} alt="" className="w-full aspect-video " />
                <div className="mt-3 grid grid-cols-8 w-full">
                    {userChannel.img ?
                        <img className="w-8 h-8" src={`${ userChannel.img }`} alt="" />
                        : <AccountCircleIcon className="w-8 h-8 text-red-600" />}
                    <div className="col-start-2 col-span-6 ml-3 flex flex-col">
                        <span className="font-semibold text-base capitalize ">{video.title}</span>
                        <span className="text-gray-700 capitalize text-sm">{`${ userChannel.name }`}</span>
                        <div className="text-xs"><span>{video.views} view</span> &middot; <span>{timeSinceUpload( video.createdAt )} ago</span></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard