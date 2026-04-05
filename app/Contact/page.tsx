import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Page() {  
    return (
      <section className="flex-col bg-white text-black justify-center w-full px-4 py-10 min-h-[80vh]">
        <h1 className="text-4xl font-semibold">Contact</h1>
        <ul>
            <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> <Link href={"mailto:annielolofsson@gmail.com"}>annielolofsson@gmail.com</Link>
            </li>
        </ul>
       </section>
    );
  };