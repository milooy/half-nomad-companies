import HomePage from "./pages/HomePage"
import "./index.css"
import { NavBar } from "./components/NavBar"
import Container from "./components/Container"
import CompanyPage from "./pages/CompanyPage"

function App() {
  return (
    <>
      <NavBar />
      <Container>
        {/* <HomePage /> */}
        <CompanyPage />
      </Container>
    </>
  )
}

export default App
