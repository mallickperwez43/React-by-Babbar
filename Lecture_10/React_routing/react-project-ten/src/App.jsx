import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Layout from './components/Layout'
import ParamComp from './components/ParamComp'
import Courses from './components/Courses'
import MockTests from './components/MockTests'
import Reports from './components/Reports'
import NotFound from './components/NotFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true, // default route for /dashboard
            element: (
              <div className="flex justify-center items-center min-h-50 animate-fade-in">
                <div className="bg-white/90 rounded-3xl p-8 shadow-2xl text-center">
                  <h2 className="text-2xl font-bold text-amber-400 mb-2">
                    Welcome to Dashboard
                  </h2>
                  <p className="text-sm text-gray-500">
                    Select a section from above to get started
                  </p>
                </div>
              </div>
            )
          },
          { path: "courses", element: <Courses /> },
          { path: "mock-tests", element: <MockTests /> },
          { path: "reports", element: <Reports /> }
        ]
      },
      { path: "student", element: <ParamComp /> },
      { path: "student/:id", element: <ParamComp /> },
      { path: "*", element: <NotFound /> }
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
