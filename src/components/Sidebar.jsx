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
import { Link } from 'react-router-dom'

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
                    <li><Link to={''}><HomeOutlinedIcon />  Home</Link> </li>
                    <li><Link to={'explore'}><ExploreOutlinedIcon /> Explore</Link> </li>
                    <li><Link to={'subscriptions'}> <SubscriptionsOutlinedIcon />  Subscriptions</Link></li>

                </ul>

                <ul className='sidebar-section'>
                    <li><Link to={'library'}> <LibraryMusicOutlinedIcon />  Library</Link></li>
                    <li><Link to={'history'}><YoutubeSearchedForOutlinedIcon />  History</Link> </li>
                </ul>

                <ul className='sidebar-section'>
                    <li><Link to={'category/music'}> <MusicVideoOutlinedIcon />  Music</Link></li>
                    <li><Link to={'category/sports'}><ScoreboardOutlinedIcon />  Sports</Link> </li>
                    <li><Link to={'category/gaming'}><SportsEsportsOutlinedIcon />  Gaming</Link> </li>
                    <li><Link to={'category/movies'}><MovieFilterOutlinedIcon />  Movies</Link> </li>
                    <li><Link to={'category/news'}><NewspaperOutlinedIcon />  News</Link> </li>

                </ul>

                <ul className='sidebar-section'>
                    <li><Link to={'settings'}> <SettingsOutlinedIcon />  Settings</Link></li>
                    <li><Link><OutlinedFlagOutlinedIcon />  Report</Link></li>
                    <li><Link> <HelpCenterOutlinedIcon />  Help</Link></li>

                </ul>
            </div>
        </div>
    )
}
export default Sidebar