import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function ErrorPage(){

        const navigate=useNavigate();

        useEffect(()=>{
            setTimeout(() =>{ navigate(-1)}, 3000);
        },[])

        return (
            <>
                <h2>NotFound page</h2>
            </>
        )
}