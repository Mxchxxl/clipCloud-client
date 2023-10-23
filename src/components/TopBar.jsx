import { Link } from "react-router-dom"

const TopBar = () =>
{
    return (
        <div>
            <div>
                <div>
                    <input type="text" name="" id="" placeholder="search.." />

                </div>
                <Link to="/signin">signin</Link>
            </div>
        </div>
    )
}
export default TopBar