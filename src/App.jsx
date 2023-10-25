import './App.css'

import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore'


function App()
{
  const [ count, setCount ] = useState( 0 )

  return (
    <>
      <div className='flex flex-row '>
        {/* sidebar  */}
        <nav className=''>
          <Sidebar />
        </nav>

        {/* main section */}
        <div className='w-full'>

          {/* topbar */}
          <div>
            <TopBar />
          </div>

          {/* main section content */}
          <div>
           
            <Routes>
                <Route index path='/' element={<Home />}/>
                <Route path='/explore' element={<Explore />} />
            </Routes>
           
           
          </div>
        </div>
      </div>


    </>
  )
}

export default App
