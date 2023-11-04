import Empty from "../components/Empty"
import VideoCard from "../components/VideoCard"
import VideoListWrapper from "../components/VideoListWrapper"
import { useSelector } from "react-redux"

const SearchResults = () =>
{

    const { results } = useSelector( ( state ) => state.search )
    // console.log( results )
    return (
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
    )
}

export default SearchResults