import React from 'react';
import products from "../public/data/products.json"


export default async function Home(){

  return(
    <div style ={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
    }}>
      <h2>
        HOME PAGE
      </h2>
    </div>
  )
}