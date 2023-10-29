
import VideoCard from "../components/VideoCard"
import VideoListWrapper from "../components/VideoListWrapper"

const Home = () =>
{
    const dumyArray = new Array(20).fill("foo")

    console.log(dumyArray)  
    return (


        <VideoListWrapper >
{
    dumyArray.map(object=>
        <VideoCard videoLink={'/video/123434'}/>
    )
}
            
        </VideoListWrapper>
    )
}


export default Home