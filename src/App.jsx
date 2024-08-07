import React from 'react'
import Layout from './Components/Layout'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Display from './Components/Display'

export default function App() {
  return (
    <div className='h-screen bg-cover bg-center' 
    style={{ backgroundImage: "url('/background.jpg')"}}>
 
 {/* <Router>
  <Layout/>
  <Routes>
    <Route path='' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
  </Routes>
 </Router> */}
 <Login/>
 {/* <Layout/> */}
 {/* <Display/> */}

 {/* <div class="max-w-sm mx-auto bg-white bg-opacity-50 shadow-lg rounded-lg border border-gray-200 overflow-hidden">
  <img class="w-full h-48 object-cover" src="https://via.placeholder.com/400x200" alt="Card Image"/>
  <div class="p-6">
    <h2 class="text-xl font-semibold mb-2">Card Title</h2>
    <p class="text-gray-700">Card description goes here. This is where you put details about the card's content.</p>
  </div>
  <div class="px-6 py-4">
    <a href="#" class="text-blue-500 hover:underline">Read more</a>
  </div>
</div> */}

      </div>
  )
}
