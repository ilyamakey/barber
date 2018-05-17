import React from 'react';

function GoodsPhoto(props) {

    if(!props.item) return null;

    console.log(props.item.id);

    return(
        <div className="goods-photo">
            <img src={`../build/pics/goods/${props.item.picture[0]}`} alt={props.name} className="goods-photo__main-pic"/>
            {/*<div className="goods-photo__gallery">*/}
                {/*<img src="../build/pics/goods/travel-set.jpg" alt="" className="goods-photo__preview-pic"/>*/}
                {/*<img src="../build/pics/goods/travel-set.jpg" alt="" className="goods-photo__preview-pic"/>*/}
                {/*<img src="../build/pics/goods/travel-set.jpg" alt="" className="goods-photo__preview-pic"/>*/}
            {/*</div>*/}
        </div>
    )
    
}

export default GoodsPhoto;