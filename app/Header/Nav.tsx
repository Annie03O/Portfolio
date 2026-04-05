export const Nav = () => {
    return (
        <nav className=" text-white p-4">
            <ul className="flex space-x-4 justify-center">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
        </nav>
    );
}