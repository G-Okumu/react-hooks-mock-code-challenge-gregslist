import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  //Display listings
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(response => response.json())
      .then((data) => {
        setIsLoaded(true);
        setListings(data);
      },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, []);

  //search 
  const displayedListings = listings.filter((listing) =>
  listing.description.toLowerCase().includes(search.toLowerCase())
);

  //Delete single listing
  function deleteSingleList(id, description) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    }).then(response => {
      return response.json()
    }).then(() => {
      const updatedListings = listings.filter((list) => list.id !== id);
      setListings(updatedListings);
    });
    alert(`${description} deleted successfully`);
  }
  if (error) {
    return <div> Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return (
      <div className="app">
        <Header searchListing={setSearch}/>
        <ListingsContainer listings={displayedListings} handleDelete={deleteSingleList} />

      </div>
    );
  }
}

export default App;
