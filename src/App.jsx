import './App.css'

import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore'
import Settings from './pages/Settings'
import Category from './pages/Category'
import Subscriptions from './pages/Subscriptions'
import SignIn from './pages/SignIn'
import { useLocation } from 'react-router-dom'
import Upload from './pages/Upload'
import Video from './pages/Video'

function App()
{
  const location = useLocation()
  const isAuthRoute = location.pathname === '/signin'

  console.log( isAuthRoute )

  return (
    <>
      <Routes>
        <Route path='/signin' element={<SignIn />} />
      </Routes>

      {
        !isAuthRoute &&
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

            {/* relative  bg-[#161616] overflow-y-scroll  h-full p-5 flex items-center justify-center */}
            <div className='main-content bg-[#161616] overflow-y-scroll h-full p-5 flex flex-wrap'>

              <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/settings' element={<Settings />} />
                <Route path='/subscriptions' element={<Subscriptions />} />
                <Route path='/category/:category' element={<Category />} />
                <Route path='/video/:videoId' element={<Video />} />
                <Route path='/upload' element={<Upload />} />
              </Routes>


            </div>
          </div>
        </div>

      }


    </>
  )
}

export default App
