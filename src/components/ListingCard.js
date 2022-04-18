import React, {useState} from "react";

function ListingCard({list, handleDelete}) {
  //desctructure
  let {description, image, location, id} = list;
  const [like, setLike] = useState(false);

  function deleteListing(){
    handleDelete(id, description);
  }


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {like ? (
          <button className="emoji-button favorite active" onClick={() => setLike(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={() => setLike(true)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={deleteListing}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
