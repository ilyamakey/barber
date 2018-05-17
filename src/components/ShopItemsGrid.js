import React from 'react';
import ShopItem from "./ShopItem";

function ShopItemsGrid(props) {

    let data = props.goods;

    let goods = data.map((item) =>
        <ShopItem key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  picture={item.picture}
        />
    );


    return(
        <div className="shop-grid">
            {goods}
        </div>
    )
}

export default ShopItemsGrid;