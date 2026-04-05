export const Nav = () => {
    return (
        <nav className=" text-brack p-4">
            <ul className="flex space-x-4 justify-center">
                <li><a href="/Portfolio" className="hover:underline">Home</a></li>
                <li><a href="/Portfolio/About_Me" className="hover:underline">About</a></li>
                <li><a href="/Portfolio/Contact" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    );
}