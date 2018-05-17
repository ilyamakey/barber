import React from 'react';
import ItemOrderBtn from './ItemOrderBtn';

function GoodsDescription(props) {

    if(!props.item) return null;

    return(
        <div className="goods-description">
            <div className="goods-description__about">
                <h1 className="goods-description__name">{props.item.name}</h1>
                <h4 className="goods-description__item-id">Art number: {props.item.id}</h4>
            </div>
            <p className="goods__description__item-description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam architecto culpa dolor dolores esse exercitationem iure molestiae, odit possimus quia reprehenderit sequi sint ullam voluptates. Aut esse minus quidem rem repellendus velit vitae voluptates.
            </p>
            <ItemOrderBtn />
            <div className="goods-description__kit">
                <h3 className="goods-description__heading">kit includes:</h3>
                <ul className="goods-description__list">
                    <li className="goods-description__list__item">Lorem ipsum dolor sit.</li>
                    <li className="goods-description__list__item">Lorem ipsum dolor.</li>
                    <li className="goods-description__list__item">Lorem ipsum dolor sit amet.</li>
                    <li className="goods-description__list__item">Lorem ipsum dolor.</li>
                    <li className="goods-description__list__item">Lorem ipsum.</li>
                </ul>
            </div>
        </div>
    )
}

export default GoodsDescription;