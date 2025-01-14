import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'
import axios from 'axios'
import AddCloth from './pages/AddCloth'
import EditCloth from './pages/EditCloth'
import ClothDetails from './pages/ClothDetails'

// Get all clothes
const getAllClothes = async () => {
  let allClothes = []
  await axios.get('http://localhost:5000/cloth').then(res => {
    allClothes = res.data
  })
  return allClothes
}

const getMyClothes = async () => {
  let user = JSON.parse(localStorage.getItem("user"))
  let allClothes = await getAllClothes()
  return allClothes.filter(item => item.createdBy === user._id)
}

const getFavClothes = async () => {
  return JSON.parse(localStorage.getItem("fav"))
}

const getCloth = async ({ params }) => {
  let cloth;
  await axios.get(`http://localhost:5000/cloth/${params.id}`)
    .then(res => {
      cloth = { ...cloth, email: res.data.email }
    })
  return cloth
}

// Define the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainNavigation />,
    children: [
      {
        index: true, // This means the default path will render the Home component
        element: <Home />,
        loader: getAllClothes,
      },
      {
        path: '/myCloth',
        index: true,
        element: <Home />,
        loader: getMyClothes
      },
      {
        path: '/favCloth',
        index: true,
        element: <Home />,
        loader: getFavClothes
      },
      {
        path: '/addCloth',
        index: true,
        element: <AddCloth />,
      },
      {
        path: '/editCloth/:id',
        index: true,
        element: <EditCloth />,
      },
      {
        path: '/cloth/:id',
        index: true,
        element: <ClothDetails />,
        loader: getCloth
      },
    ]
  },
])

// Export the main App component
export default function App() {
  return <RouterProvider router={router} />
}
