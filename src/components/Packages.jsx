import PackageRow from "./PackageRow";

const packages = [
  {
    name: "Beirut City Escape",
    theme: "City & Food",
    price: "$50",
    duration: "1 Day",
    date: "June 15 - 10:00 AM",
  },
  {
    name: "Beirut Sunset Cruise",
    theme: "Relaxation",
    price: "$60",
    duration: "Evening (4 hrs)",
    date: "June 17 - 5:00 PM",
  },
  {
    name: "Jeita Grotto Discovery",
    theme: "Nature",
    price: "$40",
    duration: "Half Day",
    date: "June 18 - 9:00 AM",
  },
  {
    name: "Jeita & Surroundings Tour",
    theme: "Adventure",
    price: "$55",
    duration: "1 Day",
    date: "June 19 - 8:30 AM",
  },
  {
    name: "Jabal Safi Camping Trip",
    theme: "Camping",
    price: "$70",
    duration: "2 Days",
    date: "June 20 - 4:00 PM",
  },
  {
    name: "Mountain Hiking Experience",
    theme: "Hiking",
    price: "$45",
    duration: "1 Day",
    date: "June 22 - 7:00 AM",
  },
];

export default function Packages(){

    return(
        <div id="packages"  className="page">
             <h2 id="title">Available Packages</h2>
         <div id="table">
             <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Theme</th>
            <th>Price</th>
            <th>Duration</th>
            <th>Date and Time</th>
          </tr>
        </thead>

        <tbody>

            { packages.map((pkg,index) => (
                <PackageRow key={index} pkg={pkg}/>
      )
            
        ) }
        </tbody>
</table>
</div>

        </div>

    )

}