import Navbar from "./components/Navbar"

import Home from "./components/Home"
import Destinations from "./components/Destinations"
import Packages from "./components/Packages"
import Book from "./components/Book"

import { Routes, Route } from "react-router-dom"

function App(){

  return(

    <div>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/destinations"
          element={<Destinations />}
        />

        <Route
          path="/packages"
          element={<Packages />}
        />

        <Route
          path="/book"
          element={<Book />}
        />

      </Routes>

    </div>
  )
}

export default App