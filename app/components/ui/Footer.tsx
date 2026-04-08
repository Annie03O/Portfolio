"use client"

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-white text-black py-4 flex flex-col md:flex-row justify-center items-center mt-12 gap-4 border-t border-black">
            <p className="text-sm">&copy; {new Date().getFullYear()} Annie Olofsson. All rights reserved.</p>
            <p><FontAwesomeIcon icon={faEnvelope} className=" w-4 h-4" /> <Link href={"mailto:annielolofsson@gmail.com"}>annielolofsson@gmail.com</Link></p>
        </footer>
    );
}