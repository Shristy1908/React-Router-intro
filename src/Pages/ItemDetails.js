import { useParams } from "react-router-dom";
import { ITEMS } from "../ItemsData/ItemsData";

export default function ItemDetails(){

     const {id}=useParams();
     const item=ITEMS.find((item)=>item.id===id);

    return(
        <>
            <main>
                <h1>Item Dtails</h1>
            </main>
            {/* <h1>{params.id}</h1> */}
            <div className="items">
                <h2>{item.title}</h2>
                <h2>{item.description}</h2>

            </div>
           
        </>
    )
}