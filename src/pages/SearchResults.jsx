import Empty from "../components/Empty"
import VideoCard from "../components/VideoCard"
import VideoListWrapper from "../components/VideoListWrapper"
import { useSelector } from "react-redux"

const SearchResults = () =>
{

    const { results } = useSelector( ( state ) => state.search )
    let { text } = useSelector( ( state ) => state.search )
    const searchText = text
    // console.log( results )



    return ( <>
        <div className="flex items-center justify-start p-2 text-white ">
            <p>
                <span className="capitalize">search results for </span>
                <span>{`"${ searchText }"`}</span>
            </p>
        </div>
        <VideoListWrapper >
            {results?.length >= 1 ? (
                results.map( ( object, index ) =>
                    <VideoCard key={`video-${ index }`} video={object} />
                )
            ) : (
                <Empty />
            )
            }

        </VideoListWrapper>
    </>
    )
}

export default SearchResults