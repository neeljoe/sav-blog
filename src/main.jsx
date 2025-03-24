import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import HomePage from './routes/HomePage.jsx'
import LoginPage from './routes/LoginPage.jsx'
import RegisterPage from './routes/RegisterPage.jsx'
import PostListPage from './routes/PostListPage.jsx'
import SinglePost from './routes/SinglePost.jsx'
import Write from './routes/Write.jsx'



const router = createBrowserRouter([
 {
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/posts',
      element: <PostListPage />,
    },
    {
      path: '/:slug',
      element: <SinglePost />,
    },
    {
      path: '/write',
      element: <Write />,
    },
    {
      path:'/login',
      element:<LoginPage/>,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },

  ]
 }
],
{
  basename: '/sav-blog',
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}
    >
    </RouterProvider>
  </StrictMode>,
)
