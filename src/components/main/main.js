import React from "react";
import "./main.css";
import {Container,Row,Col} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.css';
import Stack from 'react-bootstrap/Stack';
import Logo from "../../assets/logo.png";
import image1 from "../../assets/image1.png";


export default function main() {
  return (
    <div className="main">
    <div class="container">
  <div class="row">
    <div class="col-md-6">
    <Stack gap={5}>
      <div className="p-2">Now Easier to make online payments</div>
      <div className="p-2">Secure Transaction & reliable anytime</div>
      <div className="p-2">Lets manage your financials now</div>
    </Stack>
    </div>
    
    <div class="col-md-6">
    <Stack gap={5}>
      <div><img src={image1} alt="c2pay images"></img></div>
      </Stack>


    </div>
    </div>
    </div> 
    </div>  
  );
}
