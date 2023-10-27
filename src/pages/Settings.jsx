
const Settings = () =>
{
    const updateProfilePhoto = ()=>{
        console.log('updating...')
    }
    return (
        <div className="h-full w-full flex flex-col justify-start gap-10">
            <header className="mb-10 text-white text-3xl uppercase font-semibold text-center">
                <h2>
                    Settings
                </h2>
            </header>

            <ul className="settings-group ">
                <li>
                    dark mode <input type="checkbox" name="" id="dark_mode" />
                </li>
            </ul>

            <ul className="settings-group">
                <li>update profile image
                    <div>
                        <input type="file" /> <button onClick={updateProfilePhoto} className="bg-red-900 p-2 rounded-xl text-normal font-bold">update</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Settings