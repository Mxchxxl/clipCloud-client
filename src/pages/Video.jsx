import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useRef, useState } from "react"

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Comment from "../components/Comment"
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import SmallVideoCard from "../components/SmallVideoCard"
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt'
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt'
import axios from "axios"
import db from '../db'
import { formatDate } from '../util'
import { updateUser } from "../redux/userSlice"
import { useParams } from "react-router-dom"

const Video = () =>
{

    const { videoId } = useParams()
    const { user } = useSelector( state => state.user )
    const dispatch = useDispatch()
    const [ activeTab, setActiveTab ] = useState( 'comments' )
    const [ comment, setComment ] = useState( '' )
    const [ video, setVideo ] = useState( {}, )
    const [ poster, setPoster ] = useState( {} )
    const [ recommendations, setRecommendations ] = useState( [] )
    const [ comments, setComments ] = useState( [] )
    const [ likedVideo, setLikedVideo ] = useState( false )
    const [ dislikedVideo, setDislikedVideo ] = useState( false )
    const [ savedVideo, setSavedVideo ] = useState( false )
    const [ likesCount, setLikesCount ] = useState( 0 )
    const [ dislikesCount, setDislikesCount ] = useState( 0 )
    const errorRef = useRef( null )


    const displayUserError = () =>
    {
        errorRef.current.style.display = "block"
        setTimeout( () =>
        {
            errorRef.current.style.display = "none"
        }, 3000 )
    }

    const tabControl = ( e ) =>
    {
        // console.log( e.target.innerText )
        setActiveTab( e.target.innerText )
    }

    const toggleVideoDescription = ( e ) =>
    {
        // console.log( e.target )
        e.target.classList.toggle( "h-5" )
    }


    const getVideo = async () =>
    {
        try
        {
            const request = await axios.get( `/api/video/find/${ videoId }` )
            setVideo( request.data )
            // console.log( request.data )
            if ( ( user ) && request.data.likes.includes( user._id ) )
            {
                setLikedVideo( true )
            }

            setLikesCount( request.data.likes.length )
            setDislikesCount( request.data.dislikes.length )
            return
        }
        catch ( e )
        {
            console.log( e.message )
        }

    }

    const getVideoPoster = async () =>
    {
        // console.log( video )
        try
        {

            const { userId } = video
            const request = await axios.get( `/api/user/find/${ userId }` )
            setPoster( request.data )
            // console.log( request.data )
            // console.log( video.userId )

        } catch ( e )
        {
            console.log( e.message )
        }
    }

    const getRecommendations = async () =>
    {
        try
        {
            const { tags } = video
            const request = await axios.get( `/api/video/tag?tags=${ tags.join( ',' ) }` )

            let recommendations = request.data
            if ( recommendations.length <= 5 )
            {
                const response2 = await axios.get( '/api/video/random' )

                recommendations = [ ...recommendations, ...response2.data ]
                // console.log( request.data )
                // console.log( response2.data )
            }

            const uniqueRecs = recommendations.filter(
                ( v, i, arr ) => arr.findIndex( o => o._id === v._id ) === i
            )

            setRecommendations( [ ...uniqueRecs ] )

        } catch ( e )
        {
            console.log( e.message )
        }
    }

    const getComments = async () =>
    {
        try
        {
            const { _id } = video
            const request = await axios.get( `/api/comment/${ _id }` )
            setComments( request.data )
            // console.log( 'gotten comments' )
        } catch ( e )
        {
            console.log( e.message )
        }
    }

    const handleCommentInput = ( e ) =>
    {
        setComment( e.target.value )
    }

    const postComment = async () =>
    {
        if ( !user )
        {
            displayUserError()
            return
        }
        try
        {
            const request = await axios.post( '/api/comment/', {
                videoId: video._id,
                desc: comment
            } )

            getComments( video._id )
            setComment( '' )
        } catch ( e )
        {
            console.log( e.message )
        }
    }


    const saveVideo = async () =>
    {
        try
        {
            const alreadyInDb = await db.savedVideos.where( '_id' ).equals( video._id ).toArray()

            // console.log( alreadyInDb )

            if ( alreadyInDb[ 0 ]?.id )
            {
                // console.log( 'already saved' )
                await db.savedVideos.delete( alreadyInDb[ 0 ].id )
                setSavedVideo( false )
                return
            }


            await db.savedVideos.add(
                video
            )
            setSavedVideo( true )
            // console.log( 'query success' )
        } catch ( e )
        {
            console.log( e.message )
        }
    }


    const addVideoToHistory = async () =>
    {
        try
        {
            const alreadyInDb = await db.watchedVideos.where( '_id' ).equals( video._id ).toArray()

            // console.log( alreadyInDb )

            if ( alreadyInDb[ 0 ]?.id )
            {
                // console.log( 'already saved' )
                return
            }


            await db.watchedVideos.add(
                video
            )
            console.log( 'query success' )
        } catch ( e )
        {
            console.log( e.message )
        }
    }

    const subscriptionHandler = async () =>
    {

        try
        {
            if ( !user.subscriptions.includes( video.userId ) )
            {
                const request = await axios.put( `/api/user/sub/${ video.userId }` )
                // console.log( video )
                // console.log( user )
                dispatch( updateUser( request.data ) )
                // console.log( request.data )
            }
            else
            {
                const request = await axios.put( `/api/user/unsub/${ video.userId }` )
                // console.log( video )
                // console.log( user )
                dispatch( updateUser( request.data ) )
                // console.log( request.data )
            }

        } catch ( e )
        {
            console.log( e.message )
        }
    }

    const toggleLike = async () =>
    {

        if ( !user )
        {
            displayUserError()
            return
        }
        try
        {
            if ( likedVideo == true )
            {
                const request = await axios.put( `/api/user/dislike/${ video._id }` )
                // console.log( request.data )
                if ( request.data.dislikes.includes( user._id ) )
                {
                    setLikedVideo( false )
                    setDislikedVideo( true )
                    setLikesCount( request.data.likes.length )
                    setDislikesCount( request.data.dislikes.length )
                }
            } else
            {
                const request = await axios.put( `/api/user/like/${ video._id }` )
                console.log( request.data )
                if ( request.data.likes.includes( user._id ) )
                {
                    setLikedVideo( true )
                    setDislikedVideo( false )
                    setLikesCount( request.data.likes.length )
                    setDislikesCount( request.data.dislikes.length )
                }
            }
        } catch ( e )
        {
            console.log( e.message )
        }
    }

    useEffect( () =>
    {
        const getData = async () =>
        {
            await getVideo()
        }
        getData()

    }, [ videoId ] )

    useEffect( () =>
    {
        const getData = async () =>
        {


            getVideoPoster()
            getRecommendations()
            getComments()
            addVideoToHistory()
        }
        getData()

    }, [ video ] )

    return (
        <div className="grid  lg:grid-cols-12 flex-row xs:px-20 gap-10 text-white">
            <div className="lg:col-start-2 lg:col-span-7">
                <div className="flex flex-col  gap-2">
                    {video.imgUrl &&
                        <video

                            controls
                            autoPlay
                            muted
                            playsInline

                        >
                            <source src={video.videoUrl} type="video/mp4" />
                        </video>
                    }
                    <span className="capitalize xs:text-xl">{video.title}</span>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2 text-xs xs:text-base text-[#a3a6a9]">
                            <span>{video.views} views</span>
                            &middot;
                            <span>{formatDate( video.createdAt )}</span>
                        </div>
                        <div className="flex flex-row gap-1 text-xs xs:text-base xs:gap-5">
                            <span onClick={toggleLike}>{likesCount} {likedVideo ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}</span>
                            <span onClick={toggleLike}>{dislikesCount} {dislikedVideo ? < ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}</span >

                            <span onClick={saveVideo}>{savedVideo ? <FileDownloadDoneIcon /> : <FileDownloadIcon />}</span>
                        </div>
                    </div>

                    <div className="relative border-t border-b border-solid border-[#a3a6a9] p-2 grid grid-cols-12 py-5 my-1 ">
                        {
                            poster.img ? <img className="col-start-1 col-span-2 w-10 h-10 rounded" src={poster.img} alt="" /> : <AccountCircleIcon className=" text-red-600" />
                        }
                        <div className="col-start-3 col-span-10">
                            <div>
                                <h3>{poster.name}</h3>
                                <span className="text-[#a3a6a9] text-xs">{poster.subscribers} subscribers</span>
                            </div>
                            <p onClick={toggleVideoDescription} className="text-xs overflow-hidden">
                                {video.desc}
                                <span className="text-xs block">tags: {video.tags?.join( ", " )}</span>
                            </p>
                        </div>
                        {
                            user &&
                            <button onClick={subscriptionHandler} className="col-start-10 col-span-1 bg-red-900 h-fit w-fit absolute top-3 p-2 rounded-sm">{user.subscriptions.includes( video.userId ) ? "subscribed" : "subscribe"}</button>
                        }

                    </div>

                    <div>
                        <header className="flex flex-row justify-between p-2 mb-5 w-full flex-1 lg:hidden">
                            <div className={`relative py-4 px-2 ${ activeTab === "comments" ? "active-tab" : "" }`} onClick={tabControl}>comments</div>
                            <div className={`relative py-4 px-2 ${ activeTab === "recommendations" ? "active-tab" : "" }`} onClick={tabControl} >recommendations</div>
                        </header>
                        <div className="flex flex-row flex-nowrap">
                            <div className={`${ activeTab === "comments" ? "w-full" : "hidden" } lg:w-full lg:block`}>
                                <form onSubmit={( e ) => { e.preventDefault() }} action="" className="grid grid-cols-10">
                                    {
                                        user?.img ? <img src="" alt="" className="col-start-1 col-span-1 w-10 h-10 " /> : <AccountCircleIcon className=" text-red-600" />
                                    }

                                    <input className="col-start-2 col-span-9 bg-transparent  outline-none" type="text" placeholder="add a comment..." value={comment} onChange={handleCommentInput} />
                                    <button onClick={postComment} className="col-start-8 col-span-1 bg-red-900 h-fit w-fit   p-2 rounded-sm md:col-start-9">comment</button>
                                </form>
                                {
                                    comments.map( ( comment ) =>
                                    {
                                        return (
                                            <Comment key={comment._id} comment={comment} />
                                        )
                                    } )
                                }
                            </div>

                            <div className={`${ activeTab === "recommendations" ? "w-full" : "hidden" } grid grid-cols-1 lg:hidden`}>

                                {

                                    recommendations.map( ( video ) => <SmallVideoCard key={`side-recommendations-${ video._id }`} video={video} /> )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block lg:col-start-9 lg:col-span-3">

                {

                    recommendations.map( ( video ) => <SmallVideoCard key={`bottom-recommendations-${ video._id }`} video={video} /> )
                }
            </div>

            <div ref={errorRef} className='hidden absolute capitalize z-20 p-3 bg-red-900 h-fit w-fit'>
                <p>
                    signin to perform action <PriorityHighIcon />
                </p>
            </div>
        </div>
    )
}

export default Video