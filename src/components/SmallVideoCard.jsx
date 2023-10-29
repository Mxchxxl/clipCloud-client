import {Link } from "react-router-dom"



const SmallVideoCard = ()=>{
    return (
        <Link className="flex flex-col gap-2 mb-7 w-full max-w-[25rem] justify-self-center " to={'/video/111'}>
            <div>
                <img src="" alt="" className="aspect-video w-full " />
            </div>
            <div className="grid grid-col-10">
                <img src="" alt="" className="col-start-1 col-span-1" />
                <div className="col-start-2 col-span-9 flex flex-col capitalize">
                    <span>test video</span>
                    <span className="text-[#a3a6a9]">meshack</span>
                    <span className="text-xs text-[#a3a6a9]">
                        <span className="mr-5">
                            232323,23 views
                        </span>
                        <span>
                            90 days ago
                        </span>
                    </span>
                </div>
            </div>
        </Link>
    )
}


export default SmallVideoCard