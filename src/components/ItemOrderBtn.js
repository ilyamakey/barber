import React from 'react';

function ItemOrderBtn() {
    return(
        <div className="item__order">
            <div className="item__order__price">$ 2900</div>
            <button className="item__order__order-btn">buy</button>
        </div>
    )
}

export default ItemOrderBtn;