import {articlesFromAPI} from "../../data/data";
import Product from "./Product";


export default function Showcase() {
    console.log(articlesFromAPI);
    return (
        <div style = {{display:"flex", flexDirection: "column",justifyContent:"flex-start",textAlign:"start", width:"80%"}} >
        {articlesFromAPI.map((item) => (
             <Product props = {item}/>
             ))}
             </div>
             );
}
