import SmallVideoCard from "../components/SmallVideoCard"
import { useState } from "react"
import { useParams } from "react-router-dom"


const Video = () =>
{
    const {videoId} = useParams()
    console.log(videoId)

    const [activeTab, setActiveTab ] = useState('comments')

    const tabControl = (e)=>{
        console.log( e.target.innerText )
        setActiveTab( e.target.innerText )
    }

    const toggleVideoDescription = (e)=>{
console.log(e.target)
e.target.classList.toggle("h-5")
    }

    return (
        <div className="grid  lg:grid-cols-12 flex-row xs:px-20 gap-10 text-white">
            <div className="lg:col-start-2 lg:col-span-7">
                <div className="flex flex-col  gap-2">
                    <video src="youtube.com"></video>
                    <span className="capitalize xs:text-xl">{videoId}</span>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2 text-xs xs:text-base text-[#a3a6a9]">
                            <span>0182u328 views</span>
                            &middot;
                            <span>sep 3,1993</span>
                        </div>
                        <div className="flex flex-row gap-1 text-xs xs:text-base xs:gap-5">
                            <span>123</span>
                            <span>dislike</span>
                            <span>share</span>
                            <span>save</span>
                        </div>
                    </div>

                    <div className="relative border-t border-b border-solid border-[#a3a6a9] p-2 grid grid-cols-12 py-5 my-1 ">
                        <img className="col-start-1 col-span-2 w-10 h-10 rounded" src="" alt="" />
                        <div className="col-start-3 col-span-10">
                            <div>
                                <h3>michael</h3>
                                <span className="text-[#a3a6a9] text-xs">232k subscribers</span>
                            </div>
                            <p onClick={toggleVideoDescription} className="text-xs overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque nostrum, quibusdam enim, facere aut eius nam cum numquam quidem amet, iure molestias natus. Modi provident reiciendis itaque inventore veniam.</p>
                        </div>
                        <button className="col-start-10 col-span-1 bg-red-900 h-fit w-fit absolute top-3 p-2 rounded-sm">subscribe</button>
                    </div>

                    <div>
                        <header className="flex flex-row justify-between p-2 mb-5 w-full flex-1 lg:hidden">
                            <div className={`relative py-4 px-2 ${activeTab === "comments" ? "active-tab" : ""}`} onClick={tabControl}>comments</div>
                            <div className={`relative py-4 px-2 ${ activeTab === "recommendations" ? "active-tab" : "" }`} onClick={tabControl} >recommendations</div>
                        </header>
                        <div className="flex flex-row flex-nowrap">
                            <div className={`${activeTab === "comments" ? "w-full" : "hidden"} lg:w-full lg:block`}>
                                <form action="" className="grid grid-cols-10">
                                    <img src="" alt="" className="col-start-1 col-span-1 w-10 h-10 " />
                                    <input className="col-start-2 col-span-9 bg-transparent  outline-none" type="text" placeholder="add a comment..." />
                                </form>
                                {
                                    new Array( Math.ceil(Math.random()*40) ).fill( 1 ).map( ( item ) =>
                                    {
                                        return (
                                            <div className="text-sm mt-3 grid grid-cols-10">
                                                <img src="" alt="" className="col-start-1 col-span-1 w-10 h-10" />
                                                <div className="col-start-2 col-span-9 text-xs md:text-sm">
                                                    <div>
                                                        <span className="capitalize">jane doe</span>
                                                        <span className="text-xs pl-4 text-[#a3a6a9]">3 days ago</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique quis quisquam in ipsum fugiat dolor facilis harum asperiores dignissimos vitae fugit amet, officia perspiciatis provident architecto explicabo ducimus officiis.</p>
                                                </div>
                                            </div>
                                        )
                                    } )
                                }
                            </div>

                            <div className={`${activeTab === "recommendations" ? "w-full" : "hidden"} grid grid-cols-1 lg:hidden`}>
                                {
                                    new Array( Math.ceil( Math.random() * 40 ) ).fill( 1 ).map( ( video ) => <SmallVideoCard /> )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:block lg:col-start-9 lg:col-span-3">
                {
                    new Array( 20 ).fill( 1 ).map( ( video ) => <SmallVideoCard />)
                }
            </div>
        </div>
    )
}

export default Video