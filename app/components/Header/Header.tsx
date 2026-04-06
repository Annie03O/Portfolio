import { Nav } from "./Nav";

export const Header = () => {
    return (
        <header className="sticky bg-white text-black p-4 flex items-center justify-between border-b border-black">
          <h1 className="text-2xl ">Annie Olofsson</h1>
          <Nav/>
        </header>
    );
    }