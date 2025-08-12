import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import Signup from './components/Signup.jsx'
import Login from './components/Login.jsx'
import AuthProvider from './provider/AuthProvider.jsx'
import PrivateRoute from './router/PrivateRoute.jsx'
import AddEquipment from './pages/AddEquipment.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/equipment")
      },
      {
        path: "/addEquipment",
        element:
          <PrivateRoute>
            <AddEquipment></AddEquipment>
          </PrivateRoute>

      }
    ]
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/signup",
        element: <Signup></Signup>
      },
      {
        path: "/auth/login",
        element: <Login></Login>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
