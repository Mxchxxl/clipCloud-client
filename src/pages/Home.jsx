
import VideoCard from "../components/VideoCard"


const Home = () =>
{
    const dumyArray = new Array(20).fill("foo")

    console.log(dumyArray)
    return (


        <div >
{
    dumyArray.map(object=>
        <VideoCard />
    )
}
            
        </div>
    )
}


export default Home