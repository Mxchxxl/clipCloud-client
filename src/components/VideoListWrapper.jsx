
const VideoListWrapper = ( { children } ) =>
{
    return (
        <div className="flex flex-wrap justify-center">
            {children ? children : "nothing"}
        </div>
    )
}

export default VideoListWrapper