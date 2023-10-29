

const Upload = ()=>{
    return (
        <div className="text-white w-full h-full flex flex-col gap-10 justify-center items-center">
            <header>
                <h1 className="text-white lg:text-3xl capitalize font-extrabold">
                    upload video
                </h1>
            </header>
            <form className="max-w-sm upload-form" action="">
                <div>
                    <label htmlFor="title">name</label>
                    <input type="text" name="title" />
                </div>

                <div>
                    <label htmlFor="desc">description</label>
                    <input type="text" name="desc" id="" />
                </div>

                <div>
                    <label htmlFor="tags">tags</label>
                    <input type="text" name="tags" id="" placeholder="enter comma seperated tags"/>

                </div>

                <div>
                    <label htmlFor="video">video</label>
                    <input className="" type="file" name="video" id="" />
                </div>

                <button className="w-full bg-red-900 rounded-xl font-normal text-white  text-sm py-1 capitalize lg:py-2 inline-block">post</button>

            </form>
        </div>
    )
}


export default Upload