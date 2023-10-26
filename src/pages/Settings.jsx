
const Settings = () =>
{
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
        </div>
    )
}

export default Settings