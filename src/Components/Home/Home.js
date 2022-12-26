import React from "react";
import "./Home.css";
import PurchaseATicket from "../PurchaseATicket/PurchaseATicket"
import Help from "../Help/Help";
// import { Link } from "react-router-dom";


export default function Home() {
  return (
   <div>
  <Help/>
  <PurchaseATicket/>
</div>
       )}