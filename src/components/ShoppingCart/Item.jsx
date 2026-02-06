

function Item({ item, onDelete }) {
    return (
        <li className="item">

            <div>
                <h3>brand: {item.brand}</h3>
                <span>subtotal: {item.subtotal}</span>
                <span>Tax: {item.tax}</span>

                <div className="checkbox">
                    Availability: {item.availability ? "on stock" : "out of stock"}
                </div>
            </div>

            <button onClick={ ()=> onDelete(item.id)}>
                Delete
            </button>

        </li>
    )
}

export default Item
