import { Link } from "react-router-dom"

function Navbar(){

  return(

    <nav>

      <Link to="/">Home</Link>

      <Link to="/destinations">
        Destinations
      </Link>

      <Link to="/packages">
        Packages
      </Link>

      <Link to="/book">
        Book
      </Link>

    </nav>
  )
}

export default Navbar