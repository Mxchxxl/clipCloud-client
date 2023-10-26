import './App.css'

import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore'
import Settings from './pages/Settings'


function App()
{
  const [ count, setCount ] = useState( 0 )

  return (
    <>
      <div className='flex flex-row h-screen overflow-y-hidden '>
        {/* sidebar  */}
        <nav className=''>
          <Sidebar />
        </nav>

        {/* main section */}
        <div className='w-full flex flex-col'>

          {/* topbar */}
          <div>
            <TopBar />
          </div>

          {/* main section content */}
          <div className='main-content relative  bg-[#161616] overflow-y-scroll  h-full p-5 flex items-center justify-center'>
           
            <Routes>
                <Route index path='/' element={<Home />}/>
                <Route path='/explore' element={<Explore />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
           
           
          </div>
        </div>
      </div>


    </>
  )
}

export default App
