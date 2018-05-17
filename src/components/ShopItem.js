import React from 'react';
import Purchase from "./Purchase";
import {Link} from 'react-router-dom';

class ShopItem extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {


        return(
            <div className="shop-item">
                <Link className="shop-item__link" to={`/shop/${this.props.id}`}>
                    <img className="shop-item__pic" src={"/build/pics/goods/" + this.props.picture[0]} alt={this.props.name} width={220} height={300}/>
                </Link>
                <div className="shop-item__info">
                    <h4 className="shop-item__name">{this.props.name}</h4>
                    <Purchase price={this.props.price}/>
                </div>
            </div>
        )
    }
}

export default ShopItem;