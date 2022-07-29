import React from "react";
import { useState, useEffect } from "react";


export function CountrySidebar(){

  const [rowData, setRowData] = useState([]);
  useEffect(() => {
      fetch(`http://131.181.190.87:3000/countries`)
      .then(res => res.json())
      .then(data => setRowData(data))
  }, []);

  const countries = rowData.map(country => (
    <div className="countrylist">
    <button>{country}</button>
    </div>))

  

  return(
    <div className="leftcolumn">
      <h3>Regions</h3>    
    <div className="categorieslist">
      <button>All</button><br/>
      <button>North America</button><br/>
      <button>South America</button><br/>
      <button>Europe</button><br/>
      <button>Africa</button><br/>
      <button>Asia</button><br/>
      <button>Oceania</button><br/>
    </div>
      <div>
      <h3>Countries</h3>
        <div>
        <button>All</button> 
        {countries} 
        </div>
      </div>
    </div>
  );
}