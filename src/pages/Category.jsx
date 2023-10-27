import VideoCard from "../components/VideoCard"
import { useParams } from "react-router-dom"

const Category = ()=>{
    const dumyArray = new Array( 20 ).fill( "foo" )
const  {category } = useParams()
console.log(category)
    
    return (


        <div >
            {
                dumyArray.map( object =>
                    <VideoCard />
                )
            }

        </div>
    )
}

export default Category