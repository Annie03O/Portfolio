import { faContactBook, faHome, faInfo, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Nav = () => {
    return (
        <nav className=" text-brack p-4">
            <ul className="flex space-x-4 justify-center">
                <li>
                    <a href="/Portfolio" className="hover:underline flex items-center gap-1">
                       <span className="hidden md:flex text-[18px]">Home</span>
                       <FontAwesomeIcon className="mr-2 w-4 h-4" icon={faHome}/> 
                    </a>
                </li>
                <li>
                    <a href="/Portfolio/About_Me" className="hover:underline flex items-center gap-1">
                        <span className="hidden md:flex text-[18px]">About Me </span>
                        <FontAwesomeIcon className="mr-2 w-4 h-4" icon={faUser}/> 
                    </a>
                </li>
                <li>
                    <a href="/Portfolio/Contact" className="hover:underline flex items-center gap-1">
                       <span className="hidden md:flex text-[18px]">Contact</span>
                       <FontAwesomeIcon className="mr-2 w-4 h-4" icon={faContactBook}/> 
                    </a>
                </li>
            </ul>
        </nav>
    );
}