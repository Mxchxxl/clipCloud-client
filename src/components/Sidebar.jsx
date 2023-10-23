const Sidebar = () =>
{
    return (
        <div className=" bg-gray-600  h-screen pt-[1px]">
            <div className="flex flex-col gap-10 mt-20">
                <ul>
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Subscriptions</li>

                </ul>

                <ul>
                    <li>Library</li>
                    <li>History</li>
                </ul>

                <ul>
                    <li>Music</li>
                    <li>Sports</li>
                    <li>Gaming</li>
                    <li>Movies</li>
                    <li>News</li>

                </ul>

                <ul>
                    <li>Settings</li>
                    <li>Report</li>
                    <li>Help</li>

                </ul>
            </div>
        </div>
    )
}
export default Sidebar