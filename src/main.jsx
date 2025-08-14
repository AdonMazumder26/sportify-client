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
import AllEquipments from './pages/AllEquipments.jsx'
import Details from './pages/Details.jsx'
import MyEquipments from './pages/MyEquipments.jsx'
import UpdateEquipment from './pages/UpdateEquipment.jsx'
import ErrorPage from './pages/ErrorPage.jsx'



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

      },
      {
        path: "/allEquipment",
        element: <AllEquipments></AllEquipments>,
        loader: () => fetch("http://localhost:5000/equipment")
      },
      {
        path: "/details/:id",
        element:
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/equipment/${params.id}`)
      },
      {
        path: "/myEquipment/:email",
        element:
          <PrivateRoute>
            <MyEquipments></MyEquipments>
          </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/equipment/email/${encodeURIComponent(params.email)}`)
      },
      {
        path: "/updateEquipment/:id",
        element:
          <PrivateRoute>
            <UpdateEquipment></UpdateEquipment>
          </PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/equipment/${params.id}`)
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
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
