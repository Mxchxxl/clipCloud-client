import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
import YoutubeSearchedForOutlinedIcon from '@mui/icons-material/YoutubeSearchedForOutlined';
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined';
import ScoreboardOutlinedIcon from '@mui/icons-material/ScoreboardOutlined';
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined'
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined'
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined';

const Sidebar = () =>
{
    return (
        <div className=" bg-[#202020] w-fit h-screen pt-[1px]">
            <div className="flex flex-col  px-4">
                <div className='pt-3'>
                    <span className='text-3xl font-bold  text-red-600'>
                        clipcloud
                    </span>
                </div>
                <ul className='sidebar-section'>
                    <li> <HomeOutlinedIcon />  Home</li>
                    <li> <ExploreOutlinedIcon /> Explore</li>
                    <li> <SubscriptionsOutlinedIcon />  Subscriptions</li>

                </ul>

                <ul className='sidebar-section'>
                    <li> <LibraryMusicOutlinedIcon />  Library</li>
                    <li> <YoutubeSearchedForOutlinedIcon />  History</li>
                </ul>

                <ul className='sidebar-section'>
                    <li> <MusicVideoOutlinedIcon />  Music</li>
                    <li> <ScoreboardOutlinedIcon />  Sports</li>
                    <li> <SportsEsportsOutlinedIcon />  Gaming</li>
                    <li> <MovieFilterOutlinedIcon />  Movies</li>
                    <li> <NewspaperOutlinedIcon />  News</li>

                </ul>

                <ul className='sidebar-section'>
                    <li> <SettingsOutlinedIcon />  Settings</li>
                    <li> <OutlinedFlagOutlinedIcon />  Report</li>
                    <li> <HelpCenterOutlinedIcon />  Help</li>

                </ul>
            </div>
        </div>
    )
}
export default Sidebar