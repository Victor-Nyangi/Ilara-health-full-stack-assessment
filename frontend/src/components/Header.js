import React,  {useState} from 'react'

import {
    BellIcon,
    MailIcon,
    DropdownIcon,
  } from './icons'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

            return (

                      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full mx-4">
                        <div className="relative flex items-center space-between">
                          <a
                            href="/"
                            aria-label="HealthX"
                            title="HealthX"
                            className="inline-flex items-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">           
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>               
      </svg>
      <img src="images/HealthX-location.png" alt="HealthX location" className="h-7 w-7"/>
                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                              HealthX
                            </span>
                          </a>
                          <div className="flex-1 grid grid-cols-4 ml-16">
                          <div className="relative text-gray-600 focus-within:text-gray-400 col-start-1 col-end-3">
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
      </span>
      <input type="search" className="w-full py-2 text-sm text-grey-800 border rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900 transition-colors duration-200 ease-in-out" placeholder="Search for patients..." autocomplete="off"/>
    </div></div>
                          <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"

              aria-label="Notifications"
              aria-haspopup="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current">     
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>                     
      </svg>
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>
                            </li>
                            <li>
                            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"

              aria-label="Notifications"
              aria-haspopup="true"
            >
              <MailIcon className="w-5 h-5" aria-hidden="true" />
            </button>
                            </li>
                            <li>
                            <button
              className="rounded-full focus:shadow-outline-purple focus:outline-none"
        
              aria-label="Account"
              aria-haspopup="true"
            >
                <span className='flex'>
                    <>
              <img
                                        className="mx-auto object-cover rounded-full h-10 w-10 "

                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt=""
                aria-hidden="true"
              /> 
              {/* <span
              aria-hidden="true"
              className="absolute bottom-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-green-300 border-2 border-white rounded-full dark:border-gray-800"
            ></span> */}
            </>
            
            <span className='text-xs font-bold ml-2 inline-flex items-center'>Dr. Goldberg</span>
           
            <DropdownIcon className="text-xs inline-flex items-center" aria-hidden="true" />
            
              </span>
              
             
            </button>
                            </li>
                         
                          </ul>
                          <div className="lg:hidden">
                            <button
                              aria-label="Open Menu"
                              title="Open Menu"
                              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                              onClick={() => setIsMenuOpen(true)}
                            >
                              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                  fill="currentColor"
                                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                  fill="currentColor"
                                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                              </svg>
                            </button>
                            {isMenuOpen && (
                              <div className="absolute top-0 left-0 w-full">
                                <div className="p-5 bg-white border rounded shadow-sm">
                                  <div className="flex items-center justify-between mb-4">
                                    <div>
                                      <a
                                        href="/"
                                        aria-label="Company"
                                        title="Company"
                                        className="inline-flex items-center"
                                      >
                                        <svg
                                          className="w-8 text-deep-purple-accent-400"
                                          viewBox="0 0 24 24"
                                          strokeLinejoin="round"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeMiterlimit="10"
                                          stroke="currentColor"
                                          fill="none"
                                        >
                                          <rect x="3" y="1" width="7" height="12" />
                                          <rect x="3" y="17" width="7" height="6" />
                                          <rect x="14" y="1" width="7" height="6" />
                                          <rect x="14" y="11" width="7" height="12" />
                                        </svg>
                                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                          Company
                                        </span>
                                      </a>
                                    </div>
                                    <div>
                                      <button
                                        aria-label="Close Menu"
                                        title="Close Menu"
                                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                          <path
                                            fill="currentColor"
                                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                  <nav>
                                    <ul className="space-y-4">
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="Our product"
                                          title="Our product"
                                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          Product
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="Our product"
                                          title="Our product"
                                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          Features
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="/"
                                          aria-label="Product pricing"
                                          title="Product pricing"
                                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                        >
                                          Pricing
                                        </a>
                                      </li>
                                      <li>
                                      <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
    
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <BellIcon className="w-5 h-5" aria-hidden="true" />
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>
                                      </li>
                                     
                                    </ul>
                                  </nav>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );

}

export default Header
