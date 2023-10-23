import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

import { Link } from "react-router-dom"

const TopBar = () =>
{
    return (
        <div className="w-full px-3">
            <div className="flex  flex-row relative content-center items-center justify-center py-3 ">
                <div>
                    <input className="inline-block border-none outline-none h-10 w-[400px] bg-red-400" type="text" name="" id="" placeholder="search.." />
                    <SearchIcon />
                </div>
                <div>
                    <Link className="absolute -right-0" to="/signin">
                    signin
                        <AccountCircleIcon />
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default TopBar