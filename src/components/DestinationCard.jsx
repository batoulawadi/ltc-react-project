function DestinationCard(props){

    return(
        <div className="destination-card">

            <img src={props.image} alt={props.name} />

            <h2>{props.name}</h2>

            <p>{props.description}</p>

        </div>
    )
}

export default DestinationCard