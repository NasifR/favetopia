"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const [showLogoutMessage, setShowLogoutMessage] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser && user) {
        setShowLogoutMessage(true);
        setTimeout(() => {
          setShowLogoutMessage(false);
        }, 3000); 
      }
    });

    return () => unsubscribe(); 
  }, [user]);

  return (
    <>
      <div className="w-full h-16 bg-purple-700 sticky top-0">
        <div className="container mx-auto px-4 h-full relative">
          <div className="flex justify-center items-center h-full">
            <ul className="hidden md:flex gap-x-12 text-white text-xl">
              <li>
                <Link href="/">
                  <p className="hover:text-purple-700 hover:bg-white transition-all py-1 px-1 rounded-sm">
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/games">
                  <p className="hover:text-purple-700 hover:bg-white transition-all py-1 px-1 rounded-sm">
                    Games
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/movies">
                  <p className="hover:text-purple-700 hover:bg-white transition-all py-1 px-1 rounded-sm">
                    Movies
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/anime">
                  <p className="hover:text-purple-700 hover:bg-white transition-all py-1 px-1 rounded-sm">
                    Anime
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/shows">
                  <p className="hover:text-purple-700 hover:bg-white transition-all py-1 px-1 rounded-sm">
                    TV Shows
                  </p>
                </Link>
              </li>
              <li>
                <Link href="/books">
                  <p className="hover:text-purple-700 hover:bg-white transition-all py-1 px-1 rounded-sm">
                    Books
                  </p>
                </Link>
              </li>
            </ul>

            <div className="absolute right-4 text-white">
              {user ? (
                <button
                  onClick={() => auth.signOut()}
                  className="hover:text-purple-700 hover:bg-white transition-all py-1 px-4 rounded-md"
                >
                  Logout
                </button>
              ) : (
                <Link href="/login">
                  <button className="hover:text-purple-700 border border-white hover:bg-white transition-all py-1 px-4 rounded-full">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {showLogoutMessage && (
        <div className="fixed bottom-4 left-4 bg-gray-800 text-white text-sm px-4 py-2 rounded shadow-lg">
          You have successfully logged out.
        </div>
      )}
    </>
  );
};

export default Navbar;
