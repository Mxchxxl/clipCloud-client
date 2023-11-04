import './App.css'

import { Route, Routes } from 'react-router-dom'

import Category from './pages/Category'
import Explore from './pages/Explore'
import History from './pages/History'
import Home from './pages/Home'
import Library from './pages/Library'
import SearchResults from './pages/SearchResults'
import Settings from './pages/Settings'
import Sidebar from './components/Sidebar'
import SignIn from './pages/SignIn'
import Subscriptions from './pages/Subscriptions'
import TopBar from './components/TopBar'
import Upload from './pages/Upload'
import Video from './pages/Video'
import axios from 'axios'
import { updateUser } from './redux/userSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function App()
{
  const location = useLocation()
  const isAuthRoute = location.pathname === '/signin'

  const dispatch = useDispatch()

  // console.log( isAuthRoute )

  useEffect( () =>
  {
    const verifyUser = async () =>
    {
      let request = await axios.post( '/api/auth/verify', { withCredentials: true } )
      if ( request.data.status )
      {
        dispatch( updateUser( null ) )
      }
    }

    verifyUser()
  }
  )

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
            <div className='main-content bg-[#161616] overflow-y-scroll h-full p-5 '>

              <Routes>
                <Route index path='/' element={<Home />} />
                <Route path='/search/*' element={<SearchResults />} />
                <Route path='/explore' element={<Explore />} />
                <Route path='/history' element={<History />} />
                <Route path='/library' element={<Library />} />
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
