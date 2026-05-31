
export default function PackageRow({pkg}){

    return(
       <tr>
         <td className="left">{pkg.name}</td>
        <td className="left">{pkg.theme}</td>
        <td>{pkg.price}</td>
        <td>{pkg.duration}</td>
        <td>{pkg.date}</td>  
       </tr>  )

}