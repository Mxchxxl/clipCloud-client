import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import { useRef, useEffect } from 'react'


import { Link } from "react-router-dom"

const TopBar = () =>
{

    const inputRef = useRef( null )
    const inputContainerRef = useRef( null )



    const enlargeSearch = () =>
    {
        let reference = inputRef.current
        console.log( 'input clicked' )
        reference.style.width = "300px"
        reference.style.zIndex = "50"
        reference.style.backgroundColor = "red"
    }


    useEffect( () =>
    {
        console.log( inputContainerRef )
        inputRef.current.addEventListener( "focus", () =>
        {
            // console.log('input active')
            // console.log( inputContainerRef.current )
            // inputContainerRef.current.classList.add('search-open')
            inputContainerRef.current.classList.remove( 'w-1/5' )
            inputContainerRef.current.classList.add( "mx-1", "top-1", 'w-full', "z-50", "py-2", "bg-[#202020]" )
            console.log( 'clicked' )

        } )

        inputRef.current.addEventListener( "blur", () =>
        {
            // console.log('input active')
            // console.log( inputContainerRef.current )
            // inputContainerRef.current.classList.add('search-open')
            inputContainerRef.current.classList.add( 'w-1/5' )
            inputContainerRef.current.classList.remove( "top-1", "mx-1", 'w-full', "z-50", "py-2", "bg-[#202020]" )
            console.log( 'un clicked' )

        } )

    } )

    return (
        <div className=" w-full px-3 bg-[#202020]">
            <div className="flex  flex-row relative content-center items-center justify-center py-3 ">
                <div ref={inputContainerRef} tabIndex={0} className='absolute right-[50%] translate-x-1/2 border  rounded  border-solid  pl-4 w-1/5 min-w-[50px] flex justify-center items-center flex-row sm:w-2/5 lg:w-[350px]  sm:py-0 '>
                    {/* focus-within:w-full focus-within:z-10 */}
                    <input ref={inputRef} className=" min-w-[20px] inline-block border-none outline-none text-white h-8  sm:h-10 w-10/12 bg-transparent " type="text" name="" id="input" placeholder="search.." />
                    <SearchOutlinedIcon className='text-[#3d3a3a] w-2/12' />
                </div>
                <div className='ml-auto'>


                    {/* add upload icon from mui */}
                    <Link className=' h-8 text-white flex gap-1 border rounded-sm border-solid p-1 capitalize' to={'/upload'}>
                        <span className='hidden sm:inline-block'>Upload</span>
                        <CloudUploadIcon /> </Link>
                    <Link className="hidden inline-block h-8 text-white flex gap-1 border rounded-sm border-solid p-1 capitalize" to={"/signin"}>
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