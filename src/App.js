import { createBrowserRouter, RouterProvider , Router, createRoutesFromElements, Route} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Items from "./Pages/Items";
import Navbar from "./Components/Navbar";
import ItemDetails from "./Pages/ItemDetails";
import ErrorPage from "./Pages/ErrorPage";

function App() {

  const router= createBrowserRouter([
    {
       path:"/",
       element:<Navbar/>,
       errorElement:<ErrorPage/>,
       children:[
          {index:true, element: <Home/> },
          {path:"about", element: <About/>},
          {
            path:"items",
            children:[
              {index:true, element:<Items/>},
              {
                 path:":id", 
                 element:<ItemDetails/>
              },
           ],
          },
          
       ],
    }

  ])

// const route= createRoutesFromElements(
//   <>

//      <Route path="/" element={<Home/>} />
//      <Route path="/about" element={<About/>} />
//      <Route path="/items" element={<Items/>} />

//   </>
// )

// const router=createBrowserRouter(route);

  return (
    <>     
        <RouterProvider router={router}/>       
    </>
  );
}

export default App;
