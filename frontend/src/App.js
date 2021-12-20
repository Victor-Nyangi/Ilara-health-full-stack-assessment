import React, {Suspense} from "react";
import Header from "./components/Header";
import ThemedSuspense from "./components/ThemedSuspense";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
const App = () => {
  return (
    <>
    <Header/>
    <div
      className={`flex bg-gray-50 dark:bg-gray-900 overflow-hidden font-sans`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
   
    
        <main>
      <div className="container grid px-6 mx-auto">      
      <Suspense fallback={<ThemedSuspense />}>
        <Main />
      </Suspense>
      </div>
    </main>
    
         
     
      </div>
    </div>

    
    </>
  );
};

export default App;
