import { useState } from 'react'
import './App.css'
// import Home from './Redux/Componenets/Home'

import {lazy, Suspense} from 'react'
const Home = lazy(() => import("./Redux/Componenets/Home"))   // A lazy component is imported like this

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <div className='bg-red-500 py-2 text-white font-bold'>RJ Supermart </div>

      <Suspense fallback={<h2 className='text-center font-bold text-red-600'>Loading page...</h2>}>      
      {/* Wrap the component with Suspense, on which we want to apply lazy loading. 
      fallback is use to show something else, until our main component loads. */}

        <Home />

      </Suspense>


    </>
  )
}

export default App
