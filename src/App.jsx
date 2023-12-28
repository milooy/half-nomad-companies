import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom"
import Container from "./components/Container"
import { NavBar } from "./components/NavBar"
import "./index.css"
import CompanyPage from "./pages/CompanyPage"
import HomePage from "./pages/HomePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/company/:companyName",
    element: <CompanyPage />,
  },
]);

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <RouterProvider router={router} />
      </Container>
    </>
  )
}

export default App
