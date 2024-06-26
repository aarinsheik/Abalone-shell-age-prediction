import { useState } from 'react'
import Navbar from './components/navbar'
import HomePage from './pages/Home_page'
import PredictPage from "./pages/predict_page"
import AboutPage from "./pages/about_page"
import { Route , createBrowserRouter , RouterProvider } from 'react-router-dom'
import { RecoilRoot } from 'recoil';



function App() {
  const [count, setCount] = useState(0)

  const router_H = createBrowserRouter([
    {
      path:'/',
      element:[<Navbar/>,<HomePage/>]
    },
    {
      path:'/Predict' ,
      element:[<Navbar/>,<PredictPage/>]
    },
    {
      path:'/about',
      element:[<Navbar/>,<AboutPage/>]  
    }

  ])  

  return(
    <>
      <RecoilRoot>
        <RouterProvider router={router_H}></RouterProvider>
      </RecoilRoot>
    </>
  )

}

export default App
