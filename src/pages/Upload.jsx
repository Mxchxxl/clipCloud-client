import { useEffect, useRef, useState } from "react"

import axios from 'axios'
import { storage } from "../fileStorage"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const Upload = () =>
{
    const videoBucketId = import.meta.env.VITE_VIDEO_BUCKET_ID


    const navigate = useNavigate()
    const { user } = useSelector( state => state.user )

    const videoInputRef = useRef( null )
    const fromMessageRef = useRef( null )




    const [ formValues, setFormValues ] = useState( {} )
    const [ uploadPercentage, setUploadPercentage ] = useState( 0 )


    const handleInput = ( e ) =>
    {
        setFormValues( { ...formValues, [ e.target.name ]: e.target.value } )
        fromMessageRef.current.innerText = ""
    }

    const uploadVideo = async ( e ) =>
    {
        e.preventDefault()



        if ( formValues.title && formValues.tags && formValues.desc && videoInputRef.current.value )
        {

            const video = videoInputRef.current.files[ 0 ]
            setUploadPercentage( 5 )


            try
            {

                setUploadPercentage( 10 )

                const videoResponse = await storage.createFile(
                    videoBucketId,
                    'unique()',
                    video
                )

                setUploadPercentage( 40 )


                const videoID = videoResponse.$id

                const videoURL = storage.getFileView( videoBucketId, videoID )

                setUploadPercentage( 60 )

                const formattedTags = formValues.tags.split( ',' ).map( tag => tag.trim() )


                const videoObject = { ...formValues, "imgUrl": videoURL.href, "userId": user._id, "tags": formattedTags }
                // const videoObject = { ...formValues, "imgUrl": 'videoURL.href', "userId": 'user._id', "tags": formattedTags }


                let videoUploadRequest = await axios.post( '/api/video', videoObject )

                console.log( videoUploadRequest )

                setUploadPercentage( 100 )
                fromMessageRef.current.style.color = "#0ec825"
                fromMessageRef.current.innerText = "upload success"

                setTimeout( () =>
                {
                    navigate( '/' )
                }, 900 )

            } catch ( e )
            {
                console.log( e.message )
            }

        } else
        {
            fromMessageRef.current.innerText = "please fill the form"
        }




        return
    }

    useEffect( () =>
    {
        if ( !user )
        {
            navigate( '/' )
        }
    } )


    return (
        <div className="text-white w-full h-full flex flex-col gap-10 justify-start md:justify-center items-center">
            <header>
                <h1 className="text-white lg:text-3xl capitalize font-extrabold">
                    upload video
                </h1>
            </header>
            <form className="max-w-sm upload-form" action="">
                {/* upload percentage status */}
                <div className="w-full bg--transparent h-fit">
                    <div style={{ width: uploadPercentage + '%' }} className={`bg-red-900 h-1 rounded-sm upload-status-percent`}></div>
                    <p ref={fromMessageRef} className="italic text-xs text-red-400"></p>
                </div>



                <div>
                    <label htmlFor="title">name</label>
                    <input onChange={handleInput} type="text" name="title" />
                </div>

                <div>
                    <label htmlFor="desc">description</label>
                    <input onChange={handleInput} type="text" name="desc" id="" />
                </div>

                <div>
                    <label htmlFor="tags">tags</label>
                    <input onChange={handleInput} type="text" name="tags" id="" placeholder="enter comma seperated tags" />

                </div>

                <div>
                    <label htmlFor="video">video</label>
                    <input ref={videoInputRef} className="" type="file" name="video" id="" accept="video/*" />
                </div>

                <button onClick={uploadVideo} className="w-full bg-red-900 rounded-xl font-normal text-white  text-sm py-1 capitalize lg:py-2 inline-block">post</button>

            </form>
        </div>
    )
}


export default Upload