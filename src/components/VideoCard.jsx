import { Link } from "react-router-dom"

const VideoCard = ({videoLink}) =>
{
    return (
        <Link className="no-underline inline-block  m-2 max-w-[288px] mb-10" to={videoLink}>
            <div> 
                <img src="" alt=""  className="w-72 h-44 "/>
                <div className="mt-3 grid grid-cols-8 w-full">
                    <img className="w-8 h-8" src="" alt="" />
                    <div className="col-start-2 col-span-6 ml-3 flex flex-col">
                        <span className="font-semibold text-base capitalize ">test video</span>
                        <span className="text-gray-700 capitalize text-sm">michael</span>
                        <div className="text-xs"><span>1 view</span> &middot; <span>2 mins ago</span></div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default VideoCard