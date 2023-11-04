import axios from "axios"
import { storage } from "../fileStorage"
import { updateUser } from "../redux/userSlice"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useRef } from "react"
import { useSelector } from "react-redux"

const Settings = () =>
{
    const profilebucketId = import.meta.env.VITE_VIDEO_BUCKET_ID
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useSelector( state => state.user )
    const photoInputRef = useRef( null )


    const updateProfilePhoto = async () =>
    {

        const img = photoInputRef.current.files[ 0 ]

        try
        {

            const imgResponse = await storage.createFile(
                profilebucketId,
                'unique()',
                img
            )

            const imgID = imgResponse.$id

            const imgURL = storage.getFileView( profilebucketId, imgID )
            // console.log( imgURL )

            const userObject = { ...user, "img": imgURL.href }
            // const videoObject = { ...formValues, "imgUrl": 'videoURL.href', "userId": 'user._id', "tags": formattedTags }


            let userUpdateRequest = await axios.put( `/api/user/${ user._id }`, userObject )

            console.log( userUpdateRequest )


            setTimeout( () =>
            {
                navigate( '/' )
            }, 900 )

        } catch ( e )
        {
            console.log( e.message )
        }
    }




    const logout = async () =>
    {
        dispatch( updateUser( null ) )
        navigate( '/' )
    }


    return (
        <div className="h-full w-full flex flex-col justify-start gap-5 md:gap-10">
            <header className="mb-10 text-white text-lg md:text-3xl uppercase font-semibold text-center">
                <h2>
                    Settings
                </h2>
            </header>

            <ul className="settings-group ">


                {user &&
                    <li>update profile image
                        <div className="ml-2">
                            <input ref={photoInputRef} type="file" /> <button onClick={updateProfilePhoto} className="bg-red-900 p-2 rounded-xl text-normal font-bold">update</button>
                        </div>
                    </li>
                }

                {user &&

                    <li><button onClick={logout} className="bg-red-900 p-2 rounded-xl text-normal font-bold">logout</button></li>
                }
            </ul>


        </div>
    )
}

export default Settings