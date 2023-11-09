import { updateResults, updateSearch } from '../redux/searchSlice'
import { useEffect, useRef } from 'react'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { Link } from "react-router-dom"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { useSelector } from 'react-redux'

const TopBar = () =>
{
    const { user } = useSelector( ( state ) => state.user )

    const inputRef = useRef( null )
    const inputContainerRef = useRef( null )
    const dispatch = useDispatch()
    const navigate = useNavigate()




    // const enlargeSearch = () =>
    // {
    //     let reference = inputRef.current
    //     console.log( 'input clicked' )
    //     reference.style.width = "300px"
    //     reference.style.zIndex = "50"
    //     reference.style.backgroundColor = "red"
    // }


    const search = async () =>
    {
        const text = inputRef.current.value
        if ( text )
        {
            dispatch( updateSearch( text ) )
            const response = await axios.get( `/api/video/search?q=${ text }` )
            // console.log( response.data )
            dispatch( updateResults( response.data ) )

            inputRef.current.value = ""

            //redirect to search results
            navigate( `/search/${ text }` )
        } else
        {
            console.log( 'invalid search params' )
        }

    }






    useEffect( () =>
    {
        // console.log( user )
        inputRef.current.addEventListener( "focus", () =>
        {
            // console.log('input active')
            // console.log( inputContainerRef.current )
            // inputContainerRef.current.classList.add('search-open')
            inputContainerRef.current.classList.remove( 'w-1/5' )
            inputContainerRef.current.classList.add( "mx-1", "top-1", 'w-full', "z-50", "py-2", "bg-[#202020]" )
            console.log( 'clicked' )
            document.addEventListener( 'click', closeSearch )
        } )

        const closeSearch = ( e ) =>
        {
            if ( !inputContainerRef.current.contains( e.target ) )
            {
                // console.log('input active')
                // console.log( inputContainerRef.current )
                // inputContainerRef.current.classList.add('search-open')
                inputContainerRef.current.classList.add( 'w-1/5' )
                inputContainerRef.current.classList.remove( "top-1", "mx-1", 'w-full', "z-50", "py-2", "bg-[#202020]" )
                // console.log( 'un clicked' )
                document.removeEventListener( "click", closeSearch )
            }
            // console.log( e.target )

        }


        // console.log( user )

    }, [ user ] )

    return (
        <div className=" w-full px-3 bg-[#202020]">
            <div className="flex  flex-row relative content-center items-center justify-center py-3 ">
                <div ref={inputContainerRef} tabIndex={0} className='absolute right-[50%] translate-x-1/2 border  rounded  border-solid  pl-4 w-1/5 min-w-[50px] flex justify-center items-center flex-row sm:w-2/5 lg:w-[350px]  sm:py-0 '>
                    {/* focus-within:w-full focus-within:z-10 */}
                    <input ref={inputRef} className=" min-w-[20px] inline-block border-none outline-none text-white h-8  sm:h-10 w-10/12 bg-transparent " type="text" name="" id="input" placeholder="search.." />
                    <SearchOutlinedIcon onClick={search} className='text-[#3d3a3a] w-2/12 bg-white rounded-full' />
                </div>
                <div className='ml-auto'>


                    {/* add upload icon from mui */}
                    <Link className={`${ user ? "flex" : "hidden" } h-8 text-white flex gap-1 border rounded-sm border-solid p-1 capitalize`} to={'/upload'}>
                        <span className='hidden sm:inline-block'>Upload</span>
                        <CloudUploadIcon /> </Link>
                    <Link className={` ${ user ? "hidden" : "flex" } h-8 text-white flex gap-1 border rounded-sm border-solid p-1 capitalize`} to={"/signin"}>
                        <span className='hidden sm:inline-block'>
                            signin
                        </span>

                        <AccountCircleOutlinedIcon />
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default TopBar