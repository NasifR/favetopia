import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-16 bg-purple-700 sticky top-0">
        <div className="container mx-auto px-4 h-full">
          <div className="flex justify-center items-center h-full">
            {/* <Logo/> */}
            <ul className="hidden md:flex gap-x-16 text-white text-xl">
              <li>
                <Link href="/">
                  <p className=" hover:text-purple-700 hover:bg-white transition-all py-1 px-1 rounded-sm">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/games">
                  <p className=" hover:text-purple-700 hover:bg-white transition-all py-1 px-1 rounded-sm">Games</p>
                </Link>
              </li>
              <li>
                <Link href="/movies">
                  <p className=" hover:text-purple-700 hover:bg-white transition-all py-1 px-1 rounded-sm">Movies</p>
                </Link>
              </li>
              <li>
                <Link href="/anime">
                  <p className=" hover:text-purple-700 hover:bg-white transition-all py-1 px-1 rounded-sm">Anime</p>
                </Link>
              </li>
              <li>
                <Link href="/shows">
                  <p className=" hover:text-purple-700 hover:bg-white transition-all py-1 px-1 rounded-sm">TV Shows</p>
                </Link>
              </li>
              <li>
                <Link href="/books">
                  <p className=" hover:text-purple-700 hover:bg-white transition-all py-1 px-1 rounded-sm">Books</p>
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
