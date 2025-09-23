import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider as ReactProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//     },
//     {
//     path: "about",
//     element: <About/>
//     },
//     {
//       path: "contact",
//       element: <Contact />
//     }]
//   }])


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='github' element={<Github/>}/>
        <Route path='user/:id' element={<User/>}/>

      </Route>
    )
  )
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactProvider router = {router}/>
  </StrictMode>,
)
