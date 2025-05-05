import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
  // declare and initialize state 
  const [cart, setCart] = useState([]);

  //event handler to add item to cart
  const addItem = (item) => {
      setCart((prev) => {    //use setCart state to get access previous item which is prev
        return [item, ...prev] //return new added item and previous items
      })
   };

//event handler to remove item from cart
  const removeItem = (targetIndex) => {  //take removeItme's index argument 
    setCart((prev) => {
      return prev.filter((item, index) => //use filter method to create new array (filter can take two arguments)
        index != targetIndex //we will create a new array by removing targetIndex
      )
    })
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => ( //use map method to display all items(map can take two arguments)
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
