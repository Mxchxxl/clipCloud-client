import SmallVideoCard from "../components/SmallVideoCard"



const Video = () =>
{
    return (
        <div className="flex flex-row px-20 gap-10 text-white">
            <div className="">
                <div className="flex flex-col  gap-2">
                    <video src="youtube.com"></video>
                    <span className="capitalize text-xl">test video</span>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-row gap-2 text-base text-[#a3a6a9]">
                            <span>0182u328 views</span>
                            &middot;
                            <span>sep 3,1993</span>
                        </div>
                        <div className="flex flex-row gap-5">
                            <span>123</span>
                            <span>dislike</span>
                            <span>share</span>
                            <span>save</span>
                        </div>
                    </div>

                    <div className="border-t border-b border-solid border-[#a3a6a9] p-2 grid grid-cols-12 py-5 my-5 ">
                        <img className="col-start-1 col-span-1 w-10 h-10 rounded" src="" alt="" />
                        <div className="col-start-2 col-span-10">
                            <div>
                                <h3>michael</h3>
                                <span className="text-[#a3a6a9] text-xs">232k subscribers</span>
                            </div>
                            <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos atque nostrum, quibusdam enim, facere aut eius nam cum numquam quidem amet, iure molestias natus. Modi provident reiciendis itaque inventore veniam.</p>
                        </div>
                        <button className="col-start-12 col-span-1 bg-red-900 h-fit w-fit self-center p-2 rounded-sm">subscribe</button>
                    </div>

                    <div>
                        <header className="flex flex-row justify-between p-4 mb-5 w-full flex-1 hidden">
                            <div>comments</div>
                            <div>recommendations</div>
                        </header>
                        <div className="flex flex-row flex-nowrap">
                            <div className="w-full">
                                <form action="" className="grid grid-cols-10">
                                    <img src="" alt="" className="col-start-1 col-span-1 w-10 h-10 " />
                                    <input className="col-start-2 col-span-9 bg-transparent  outline-none" type="text" placeholder="add a comment..." />
                                </form>
                                {
                                    new Array( 35 ).fill( 1 ).map( ( item ) =>
                                    {
                                        return (
                                            <div className="text-sm mt-3 grid grid-cols-10">
                                                <img src="" alt="" className="col-start-1 col-span-1 w-10 h-10" />
                                                <div className="col-start-2 col-span-9">
                                                    <div>
                                                        <span>jane doe</span>
                                                        <span className="text-xs pl-4 text-[#a3a6a9]">3 days ago</span>
                                                    </div>
                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique quis quisquam in ipsum fugiat dolor facilis harum asperiores dignissimos vitae fugit amet, officia perspiciatis provident architecto explicabo ducimus officiis.</p>
                                                </div>
                                            </div>
                                        )
                                    } )
                                }
                            </div>

                            <div className="hidden w-full">
                                {
                                    new Array( 20 ).fill( 1 ).map( ( video ) => <SmallVideoCard /> )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {
                    new Array( 20 ).fill( 1 ).map( ( video ) => <SmallVideoCard />)
                }
            </div>
        </div>
    )
}

export default Video