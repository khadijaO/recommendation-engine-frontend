import { convertLength } from '@mui/material/styles/cssUtils';
import axios from 'axios';
import React, { useState, setState, useEffect } from 'react';
import RecommendedProducts from './recommendedProducts'
import Button from '@mui/joy/Button';
import CircularProgress from '@mui/joy/CircularProgress';

import { str2, options } from '../util/options';

import './test.css'
function Test() {
    return (
<div>
    
 
  <div class="wrapper">
   
    <div class="box ">
      <h2>Team Builder</h2>
      <p>Scans our talent network to create the optimal team for your project</p>
      {/* <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""> */}
    </div>
     
    <div class="box red">
      <h2>Team Builder</h2>
      <p>Scans our talent network to create the optimal team for your project</p>
      {/* <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""> */}
    </div><div class="box red">
      <h2>Team Builder</h2>
      <p>Scans our talent network to create the optimal team for your project</p>
      {/* <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""> */}
    </div><div class="box red">
      <h2>Team Builder</h2>
      <p>Scans our talent network to create the optimal team for your project</p>
      {/* <img src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt=""> */}
    </div>

  </div>
 
  
</div>

    )
}
export default Test;