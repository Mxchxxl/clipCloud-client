
const Settings = () =>
{
    const updateProfilePhoto = ()=>{
        console.log('updating...')
    }
    return (
        <div className="h-full w-full flex flex-col justify-start gap-5 md:gap-10">
            <header className="mb-10 text-white text-lg md:text-3xl uppercase font-semibold text-center">
                <h2>
                    Settings
                </h2>
            </header>

            <ul className="settings-group ">
                <li>
                    dark mode <input type="checkbox" name="" id="dark_mode" />
                </li>

                <li>update profile image
                    <div className="ml-2">
                        <input type="file" /> <button onClick={updateProfilePhoto} className="bg-red-900 p-2 rounded-xl text-normal font-bold">update</button>
                    </div>
                </li>
            </ul>

    
        </div>
    )
}

export default Settings