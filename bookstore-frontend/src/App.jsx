import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Category from "./pages/Category";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AdForm from "./components/AdForm";

function App(){
const router = createBrowserRouter([{

  path:"/",
  element:<HomePage/>,
  children:[
{
  path:"",
  element:<Dashboard/>,
  index:true,
},
{
  path:"/about",
  element:<About/>,
  index:true,
},
{
  path:"/category",
  element:<Category/>,
  index:true,
},
{
  path:"/adForm",
  element:<AdForm/>,
  index:true,
},
{
  path:"/login",
  element:<SignIn/>,
  index:true,
},
{
  path:"/register",
  element:<SignUp/>,
  index:true,
},
{
  path:"*",
  element:<NotFound/>,
  index:true,
},
  ]

}]);

return(
  <>
  <RouterProvider router={router}/>
  </>
)
}
export default App;