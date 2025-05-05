import React from "react";

export default function ItemList({ items, onItemClick }) {
    //event handler for when user click button
  const handleClick = ({ target }) => {
    const item = target.value; //stored user clicked's item to item variable 
    //we take onItemClick as function because the parent component passes a function as a prop
    onItemClick(item); //in GroceryCart.js, use this item argument to add item
  };

  return (
    <div>
      {items.map((item, index) => (
        <button value={item} onClick={handleClick} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
}
