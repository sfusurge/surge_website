
function NavBar() {
    return (
        <div className="flex w-full bg-purple-800 justify-between items-center px-5 w-10/12 mx-auto p-3">
            <p className="text-white">SFU SURGE</p>
            <ul className="flex space-x-4 text-white">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>EVENTS</li>
                <li>SPONSOR US</li>
                <li>JOIN OUR TEAM</li>
            </ul>
        </div>
    )
}

export default NavBar;