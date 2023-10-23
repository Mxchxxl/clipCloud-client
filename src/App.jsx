import './App.css'

import Home from './pages/Home/Home'
import Sidebar from './components/Sidebar'
import TopBar from './components/TopBar'
import { useState } from 'react'

function App()
{
  const [ count, setCount ] = useState( 0 )

  return (
    <>
      <div className='grid grid-cols-12 '>
        {/* sidebar  */}
        <nav className='col-span-2'>
          <Sidebar />
        </nav>

        {/* main section */}
        <div className='col-span-10'>

          {/* topbar */}
          <div>
            <TopBar />
          </div>
          <div>

          </div>
        </div>
      </div>


    </>
  )
}

export default App
