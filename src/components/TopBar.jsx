import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Link } from "react-router-dom"

const TopBar = () =>
{
    return (
        <div className="w-full px-3">
            <div className="flex  flex-row relative content-center items-center justify-center py-3 ">
                <div>
                    <input className="inline-block border-none outline-none h-10 w-[400px] bg-red-400" type="text" name="" id="" placeholder="search.." />
                    <SearchOutlinedIcon />
                </div>
                <div>
                    <Link className="absolute -right-0" to="/signin">
                    signin
                        <AccountCircleOutlinedIcon />
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default TopBar