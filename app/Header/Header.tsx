import { Nav } from "./Nav";

export const Header = () => {
    return (
        <header className="bg-black text-white p-4 flex items-center justify-between">
          <h1 className="text-2xl ">Annie Olofsson</h1>
          <Nav/>
        </header>
    );
    }