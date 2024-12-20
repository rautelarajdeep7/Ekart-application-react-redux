import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'        // Importing Provider from redux
import Store_file from './Redux/toolkit_files/store.js'      // Importing Store

createRoot(document.getElementById('root')).render(

    <Provider store={Store_file}>            
    {/* 
    Provider is used to Provide the values to the components which are wrapped inside it. It is just like what we used in useContext hook.
    But in useContext hook, we created the Provider, and here, redux is providing us the Provider logic by itself, to provide store={Store} means we will 
    use 'Store_file' as the Store.
    */}

    <App />             {/* We have wrapped App inside Provider, which is providing store. So, now Store will be accessible throught our App */}

    </Provider>

    /* In React-Redux, the Provider component is used to pass the Redux store down to the rest of your application. 
    It makes the Redux store available to any nested components that are connected to the Redux store via the connect function 
    or the useSelector/useDispatch hooks  */
)
