import { Link } from "react-router-dom";
import { ITEMS } from "../ItemsData/ItemsData";

export default function Items(){

    return(
        <>

           <main>
                <h1>Items Page</h1>
           </main>
           <ul>

                {/* <Link to={"/items/item-1"} className="items">
                     <li>Item-1</li>
                </Link>
                <Link to={"/items/item-2"} className="items">
                     <li>Item-2</li>
                </Link>
                <Link to={"/items/item-3"} className="items">
                     <li>Item-3</li>
                </Link> */}

                {
                    (ITEMS.map((item)=>(
                         <Link to={`/items/${item.id}`}>
                              <li>{item.id}</li>
                         </Link>
                        
                    )))
                }

           </ul>
           
        </>
    )
 
}