import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
                    {
                                        path:"/",
                                        element:<Main></Main>,
                                        children:[
                                 {    
                                        path:"/" ,
                                        element:<Home></Home>                                                      
                                              }
 ]
                    }
]);
export default router;
