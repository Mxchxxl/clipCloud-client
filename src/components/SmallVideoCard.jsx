import { useEffect, useState } from "react"

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link } from "react-router-dom"
import axios from 'axios'
import { formatDate } from "../util"

const SmallVideoCard = ( { video } ) =>
{

    const [ videoPoster, setVideoPoster ] = useState( {} )

    useEffect( () =>
    {
        const getVideoPoster = async () =>
        {
            // console.log( video )
            try
            {

                const { userId } = video
                const request = await axios.get( `/api/user/find/${ userId }` )
                setVideoPoster( request.data )

                // console.log( video.userId )

            } catch ( e )
            {
                console.log( e.message )
            }
        }

        getVideoPoster()

    }, [] )
    return (
        <Link className="flex flex-col gap-2 mb-7 w-full max-w-[25rem] justify-self-center " to={`/video/${ video._id }`}>
            <div>
                <img src={video.imgUrl} alt="" className="aspect-video w-full " />
            </div>
            <div className="grid grid-col-10">

                {
                    videoPoster.img ? <img src={videoPoster.img} alt="" className="col-start-1 col-span-1" /> : <AccountCircleIcon className=" text-red-600" />
                }
                <div className="col-start-2 col-span-9 flex flex-col capitalize">
                    <span>{video.title}</span>
                    <span className="text-[#a3a6a9]">{videoPoster.name}</span>
                    <span className="text-xs text-[#a3a6a9]">
                        <span className="mr-5">
                            {`${ video.views } views`}
                        </span>
                        <span>
                            {formatDate( video.createdAt )}
                        </span>
                    </span>
                </div>
            </div>
        </Link>
    )
}


export default SmallVideoCard