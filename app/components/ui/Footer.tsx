"use client"

export default function Footer() {
    return (
        <footer className="w-full bg-white text-black py-4 flex justify-center items-center mt-12">
            <p className="text-sm">&copy; {new Date().getFullYear()} Annie Olofsson. All rights reserved.</p>
        </footer>
    );
}