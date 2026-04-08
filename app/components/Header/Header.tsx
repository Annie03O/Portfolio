"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav } from "./Nav";

export const Header = () => {
  const pathName = usePathname();

  const formatSegment = (segment: string) => {
    return segment
      .split("-")
      .map((word) => {
        if (word.toLowerCase() === "clearchoice") return "ClearChoice";
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };

  const pathSegments = pathName.split("/").filter(Boolean);

  return (
    <header className="sticky">
      <section className="bg-white text-black p-2 md:p-4 flex items-center justify-between border-b border-black">
        <h1 className="text-2xl">Annie Olofsson</h1>
        <Nav />
      </section>

      <nav className="absolute bg-black left-4 md:top-22 text-white">
        <Link href="/">Home</Link>

        {pathSegments.map((segment, index) => {
          const href = "/" + pathSegments.slice(0, index + 1).join("/");
          const isLast = index === pathSegments.length - 1;

          return (
            <span key={href}>
              {" / "}
              {isLast ? (
                <span>{formatSegment(segment)}</span>
              ) : (
                <Link href={href}>{formatSegment(segment)}</Link>
              )}
            </span>
          );
        })}
      </nav>
    </header>
  );
};