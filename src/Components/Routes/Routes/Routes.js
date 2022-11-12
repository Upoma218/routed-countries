import { createBrowserRouter } from "react-router-dom";
import Country from "../../Country/Country";
import Countries from "../Countries/Countries";

export const router = createBrowserRouter([
    {path:'/', 
    loader: async() => {
        return fetch('https://restcountries.com/v3.1/all')
    },
    element: <Countries></Countries>},
    {
        path: '/country/:name',
        loader: async({params})=>{
           return fetch(`https://restcountries.com/v3.1/name/${params.name}`)
        },
        element:<Country></Country>
    }
])