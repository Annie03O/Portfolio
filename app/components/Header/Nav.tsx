import { faContactBook, faHome, faInfo, faInfoCircle, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Nav = () => {
    return (
        <nav className=" text-black p-4">
            <ul className="flex space-x-4 justify-center">
                <li>
                    <a href="/Portfolio" className="hover:underline flex items-center gap-1">
                       <FontAwesomeIcon className="mr-2 w-4 h-4" icon={faHome}/> 
                    </a>
                </li>
            </ul>
        </nav>
    );
}