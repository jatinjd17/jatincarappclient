import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
// import { Link } from "react-scroll";
import Router from "next/router";
import NProgress from "nprogress";
import SearchBar2NavBar from "./FrontPage/SearchBar2NavBar";
import { isAuth, SignOut } from "../actionsBlog/user";

if (typeof window !== "undefined") {
  NProgress.configure({ showSpinner: true });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  ">
          <div className="flex items-center justify-between h-16 ">
            <div className="flex items-center 2xl:ml-16 xl:ml-16 md:ml-0">
              <div className="flex-shrink-0 2xl:hidden md:block cursor-pointer">
                <div onClick={() => Router.push("/")}>
                  <img
                    className="h-8 w-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                    alt="Workflow"
                  />
                </div>
              </div>

              <div className="2xl:hidden md:block ml-12">
                <Link href="/Blog/blogs/Allblogs">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                    <p>Blogs</p>
                  </div>
                </Link>
              </div>
              <div className="2xl:hidden md:block sm:overflow-x-auto">
                {!isAuth() && (
                  <div>
                    <Link href="/Blog/user/signin">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                        SignIn
                      </a>
                    </Link>
                    <Link href="/Blog/user/signup">
                      <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                        SignUp
                      </a>
                    </Link>
                  </div>
                )}
              </div>
              <div className="2xl:hidden md:block">
                {isAuth() && (
                  <Link href="/Blog/createblog">
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                      <p>Create Blog</p>
                    </div>
                  </Link>
                )}
              </div>
              <div className="md:hidden lg:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {/* <a
                    href="#"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Dashboard
                  </a> */}
                  <div>
                    {isAuth() && (
                      <Link href="/Blog/createblog">
                        <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                          <p>Create Blog</p>
                        </div>
                      </Link>
                    )}
                  </div>
                  <Link href="/Blog/blogs/Allblogs">
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                      <p>Blogs</p>
                    </div>
                  </Link>

                  {!isAuth() && (
                    <div>
                      <Link href="/Blog/user/signin">
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                          SignIn
                        </a>
                      </Link>
                      <Link href="/Blog/user/signup">
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                          SignUp
                        </a>
                      </Link>
                    </div>
                  )}
                  {isAuth() && (
                    <div>
                      <p
                        onClick={() => SignOut(() => Router.replace("/"))}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                      >
                        LogOut
                      </p>
                    </div>
                  )}

                  <SearchBar2NavBar />

                  {/* <div className=" z-30">
                    <div className="">
                      <div className="ml-96 xl:ml-44 lg:ml-0">
                        <input
                          className="p-2 rounded-l-lg"
                          type="text"
                          placeholder="Search"
                        />
                        <button className="bg-gray-200 p-2 rounded-r-lg shadow-2xl">
                          Go
                        </button>
                      </div>
                      <div></div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:block 2xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                    <p>Home</p>
                  </div>
                </Link>
                <Link href="/Blog/blogs/Allblogs">
                  <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                    <p>All Blogs</p>
                  </div>
                </Link>
                {isAuth() && (
                  <Link href="/Blog/createblog">
                    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                      <p>Create Blog</p>
                    </div>
                  </Link>
                )}

                {isAuth() && (
                  <div>
                    <p
                      onClick={() => SignOut(() => Router.replace("/"))}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer"
                    >
                      LogOut
                    </p>
                  </div>
                )}

                {/* <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Reports
                </a> */}
              </div>
            </div>
          )}
        </Transition>
      </nav>

      {/* <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
          </div>
          
        </div>
      </main> */}
    </div>
  );
}

export default Nav;
