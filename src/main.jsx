import React, { StrictMode, Suspense } from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Root from "./components/Root/Root";
import Home from "./components/Home/Home";
import Mobiles from "./components/Mobiles/Mobiles";
import Laptops from "./components/Laptops/Laptops";
import Watch from "./components/Watch/Watch";
import Sunglass from "./components/Sunglass/Sunglass";
import Terms from "./components/Terms/Terms";
import Footer from "./components/Footer/Footer";
import Privacy from "./components/Privacy/Privacy";
import Condition from "./components/Condition/Condition";
import Facebook from "./components/Facebook/Facebook";
import Youtube from "./components/Youtube/Youtube";
import Users from "./components/Users/Users";
import Users2 from "./components/Users2/Users2";
import Gohome from "./components/Gohome/Gohome";


const usersLoadingdataPromise = fetch('https://jsonplaceholder.typicode.com/albums').then(res =>res.json());


const router = createBrowserRouter([
  {
    path : "/",
   Component : Root,
   children :[
    {index : true, Component : Home},
    {path: 'mobiles',
      loader : ()=> fetch("/public/mobile.json"),
      Component : Mobiles},
    {path: "laptops",
      loader : ()=> fetch('/public/laptop.json'),
      Component : Laptops},
    {path : 'watch',
      loader : ()=> fetch("/public/watch.json"),
      Component : Watch},
    {path : '/sunglass' ,
      loader  : ()=> fetch("../public/sunglass2.json"),
      Component : Sunglass
    },
    {path : 'terms', Component : Terms},
    {path : 'privacy', Component : Privacy},
    {path : 'condition', Component : Condition},
    {path : 'fb', Component : Facebook},
    {path : 'yt', Component : Youtube},
    {
      path : 'users',
      loader : ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      Component :Users
    },
    {
      path : 'users2',
      element : <Suspense fallback={<span>Awesome the data loading system</span>}>
          <Users2 usersLoadingdataPromise={usersLoadingdataPromise}></Users2>

      </Suspense>
    },
    {
      path : '/visit',
        
     loader: () => fetch("/home.json"),
     Component : Gohome
     
    }

   ]
  },
 
  {
    path : "blogs",
    element : <div>write your creative blogs</div>
  },
  {
    path : "contact", 
    element : <div>Contact us</div>
  },
  {
    path : "/app",
    element : <App></App>
  }
  
])




createRoot(document.getElementById('root')).render(
<StrictMode>
  <RouterProvider router={router}></RouterProvider>
</StrictMode>

)