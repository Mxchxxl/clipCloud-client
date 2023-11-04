import { useEffect, useState } from 'react'

import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined'
import HelpCenterOutlinedIcon from '@mui/icons-material/HelpCenterOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import MenuIcon from '@mui/icons-material/Menu'
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined'
import MusicVideoOutlinedIcon from '@mui/icons-material/MusicVideoOutlined'
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined'
import OutlinedFlagOutlinedIcon from '@mui/icons-material/OutlinedFlagOutlined'
import ScoreboardOutlinedIcon from '@mui/icons-material/ScoreboardOutlined'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import SportsEsportsOutlinedIcon from '@mui/icons-material/SportsEsportsOutlined'
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined'
import YoutubeSearchedForOutlinedIcon from '@mui/icons-material/YoutubeSearchedForOutlined'
import { useLocation } from 'react-router-dom'

const Sidebar = () =>
{

    // console.log( useLocation.location )
    const location = useLocation()

    const [ menuOpen, setMenuOpen ] = useState( false )

    const menuIconHandler = () =>
    {
        setMenuOpen( previous => !previous )
        // console.log('click')
    }


    useEffect( () =>
    {
        setMenuOpen( false )
    }, [ location.pathname ] )


    return (
        //   
        <div className={` ${ !menuOpen ? "w-fit  h-fit" : "w-screen  " }   bg-[#39393945] h-screen sm:overflow-y-scroll sm:h-screen  sm:bg-[#202020] z-10 fixed sm:relative  sm:w-fit  pt-[1px]  `}>

            <div className={`${ menuOpen ? "w-3/4 px-4" : "w-full px-2" }   bg-[#202020]     lg:px-4`}>
                <div className='pt-3 flex flex-row gap-2 items-center justify-between sm:justify-center'>
                    <div className=' inline-block inline-block  sm:hidden' >
                        <MenuIcon onClick={menuIconHandler} />
                    </div>
                    <Link to="/" className='text-2xl font-bold capitalize  text-red-600 flex flex-row gap-1'>
                        <Logo />
                        <span className='hidden lg:inline-block'>
                            clipcloud
                        </span>
                    </Link>
                </div>
                <div className={`${ menuOpen ? "flex" : "hidden" } flex-col sm:flex`}>
                    <ul className='sidebar-section'>
                        <li><Link to={''}><HomeOutlinedIcon />  Home</Link> </li>
                        <li><Link to={'explore'}><ExploreOutlinedIcon /> Explore</Link> </li>
                        <li><Link to={'subscriptions'}> <SubscriptionsOutlinedIcon />  Subscriptions</Link></li>

                    </ul>

                    <ul className='sidebar-section'>
                        <li ><Link to={'library'}> <LibraryMusicOutlinedIcon />  Library</Link></li>
                        <li><Link to={'history'}><YoutubeSearchedForOutlinedIcon />  History</Link> </li>
                    </ul>

                    <ul className='sidebar-section '>
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
        </div>
    )
}
export default Sidebar