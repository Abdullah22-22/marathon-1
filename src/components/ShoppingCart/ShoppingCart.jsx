import { useState } from "react";
import Item from "./Item";
import "./ShoppingCart.css"


function ShoppingCart() {

  const [brand, setBrand] = useState("");
  const [subtotal, setSubtotal] = useState("");
  const [tax, setTax] = useState("");
  const [availability, setAvailability] = useState(true);
  const [items, setItems] = useState([]);



  const addItem = (e) => {
    e.preventDefault();

    if (!brand) return null;
    const newItem = {
       id: Date.now(),
      brand,
      subtotal,
      tax,
      availability,
    };

    setItems([newItem, ...items])

    setBrand("");
    setSubtotal("");
    setTax("");
    setAvailability(true);
  };

  const deleteItem = (id) => {

    setItems(items.filter((i) => i.id !== id));
  }


  return (
    <div className="main">

      <form className="form" onSubmit={addItem}>

        <input
          placeholder="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <input
          placeholder="subtotal"
          value={subtotal}
          type="Number"
          onChange={(e) => setSubtotal(e.target.value)}
        />

        <input
          placeholder="tax"
          value={tax}
          type="Number"
          onChange={(e) => setTax(e.target.value)}
        />

        <label>
          <input
            type="checkbox"
            value={availability}
            onChange={(e) => setAvailability(e.target.checked)}
          />
          in Sock
        </label>
        <button type="submit">
          Add
        </button>
      </form>

      <div className="item-list">

        <ul className="list">

          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDelete={deleteItem}
            />
          ))}

        </ul>

      </div>

    </div>
  )
}

export default ShoppingCart

