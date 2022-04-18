import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {


  return (
    <main>
          <ul className="cards">
          {/* use the ListingCard component to display listings */}
          {
          listings.map((list) => (
            <ListingCard key={list.id} list={list} handleDelete={handleDelete} />
          ))
        } 
        </ul>
    </main>
  );
  
}

export default ListingsContainer;
