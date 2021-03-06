import React from 'react'

import {
  HomeIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  CartIcon,
} from './icons'

const Sidebar = () => {
    return (
        <aside className="z-30 flex-shrink-0 hidden w-50 bg-white dark:bg-gray-800 lg:block">
        
        <div className="h-screen hidden lg:block my-4 shadow-lg relative w-60">
            <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
    
              <nav className="mt-6">
                <div>
                  <a
                    className="w-full text-blue-500 flex items-center p-4 my-2 transition-colors duration-200 justify-start"
                    href="/"
                  >
                    <span className="text-left">
                    <HomeIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="mx-4 text-sm font-normal">Dashboard</span>
                  </a>

                  <a
                    className="w-full text-white flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-green-500 bg-indigo-900 rounded-r-md"
                    href="/"
                  >
                    <span className="text-left">
                    <OutlinePersonIcon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Patients
                    </span>
                    <span
                aria-hidden="true"
                className="relative top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"
              ></span>
                  </a>
                  <a
                    className="w-full text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="/"
                  >
                    <span className="text-left">
                    <OutlineCogIcon className="w-5 h-5" aria-hidden="true" />

                    </span>
                    <span className="mx-4 text-sm font-normal">Settings</span>
                  </a>
                  <a
                    className="w-full text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500"
                    href="/"
                  >
                    <span className="text-left">
                    <CartIcon className="w-5 h-5" aria-hidden="true" />

                    </span>
                    <span className="mx-4 text-sm font-normal">Shop</span>
                  </a>
                </div>
              </nav>
              <img src="images/HealthX-doctor.png" className="mt-20 max-w-full" alt="HealthX doctor"/>

            </div>

          </div>

      </aside>
    )
}

export default Sidebar
