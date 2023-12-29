import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {getData} from "./api"

function App() {
  const[products, setProducts] = useState([])
  

  useEffect(() => {
    getData().then((result) => {
      setProducts(result)
    })
  })

  const listProducts = () => {
    return products.map((data, i) => {
      return(
        <div className='wrapper' key={i}>
            <div>{data.id}</div>
            <div>{data.brand}</div>
        </div>
      )
    })
  }

  return (
    <div>
      <listProducts/>
    </div>
  );
}

export default App;
