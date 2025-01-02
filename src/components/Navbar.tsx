import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-purple-700 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-between items-center h-full">
            {/* <Logo/> */}
            <ul className="hidden justify-between md:flex gap-x-6 text-white">
              <li>
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/games">
                  <p>Games</p>
                </Link>
              </li>
              <li>
                <Link href="/movies">
                  <p>Movies</p>
                </Link>
              </li>
              <li>
                <Link href="/anime">
                  <p>Anime</p>
                </Link>
              </li>
              <li>
                <Link href="/shows">
                  <p>TV Shows</p>
                </Link>
              </li>
              <li>
                <Link href="/books">
                  <p>Books</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
