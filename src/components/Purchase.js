import React from 'react';

function Purchase(props) {

    return(
        <div className="purchase">
            <div className="purchase__price">$ {props.price}</div>
            <button type="button" className="button purchase__order">buy</button>
        </div>
    )
}

export default Purchase;