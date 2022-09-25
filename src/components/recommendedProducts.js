import { useEffect } from "react"
import React from 'react'
import Test from './test'
import {options} from '../util/options'
const RecommendedProducts = (props) => {

  const myLists = props.product;
  const listItems = myLists.map((myList) =>
  
    <div class="box blue">

      <h2>{myList}</h2>
      <p>{options[myList]}</p>
    </div>
  

    
  );
  return (
    <div>
      <h1 className="title2">Recommended products for that user:</h1>

      <div class="wrapper">
        {listItems}
      </div>




    </div>



  )
}

export default RecommendedProducts