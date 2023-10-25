import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import { Link } from "react-router-dom"

const TopBar = () =>
{
    return (
        <div className="w-full px-3 bg-[#202020]">
            <div className="flex  flex-row relative content-center items-center justify-center py-3 ">
                <div className='border  rounded  border-solid  pl-4'>
                    <input className="inline-block border-none outline-none text-white h-10 w-[350px] bg-transparent" type="text" name="" id="" placeholder="search.." />
                    <SearchOutlinedIcon className='text-[#3d3a3a]'/>
                </div>
                <div className='absolute -right-0'>
                    <Link className=" inline-block h-8 text-white flex gap-1 border rounded-sm border-solid p-1 capitalize" to="/signin">
                    signin
                        <AccountCircleOutlinedIcon />
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default TopBar