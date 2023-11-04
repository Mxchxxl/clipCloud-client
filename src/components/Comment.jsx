import { useEffect, useState } from "react"

import axios from "axios"
import { timeSinceUpload } from "../util"

const Comment = ( { comment } ) =>
{

    const [ commentPoster, setCommentPoster ] = useState( {} )

    const getCommentPoster = async () =>
    {
        // console.log( comment.userId )
        try
        {
            const request = await axios.get( `/api/user/find/${ comment.userId }` )
            setCommentPoster( request.data )
            // console.log( request.data )
        } catch ( e )
        {
            console.log( e.message )
        }
    }

    useEffect( () =>
    {
        getCommentPoster()
    }, [] )

    return (
        <div className="text-sm mt-3 grid grid-cols-10">
            <img src={commentPoster.imgUrl} alt="" className="col-start-1 col-span-1 w-10 h-10" />
            <div className="col-start-2 col-span-9 text-xs md:text-sm">
                <div>
                    <span className="capitalize">{commentPoster.name}</span>
                    <span className="text-xs pl-4 text-[#a3a6a9]">{timeSinceUpload( comment.createdAt )} ago</span>
                </div>
                <p>{comment.desc}</p>
            </div>
        </div>
    )
}

export default Comment