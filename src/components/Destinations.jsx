import DestinationCard from "./DestinationCard"

import beirutImg from "../assets/beirut.jpg"
import jeitaImg from "../assets/jeita.webp"
import safiImg from "../assets/jabalsafii.jpg"

function Destinations(){

    return(
        <div id="destinations" className="destinations">

            <h1>Sites to Visit</h1>

            <div className="destinations-container">

              <DestinationCard
                name="Beirut"
                description="Amazing foods and boat ride"
                image={beirutImg}
              />

              <DestinationCard
                name="Jeita"
                description="Beautiful cave and boat tour"
                image={jeitaImg}
              />

              <DestinationCard
                name="Jabal Safi"
                description="Camping experience with an amazing mountain view"
                image={safiImg}
              />

            </div>

        </div>
    )
}

export default Destinations