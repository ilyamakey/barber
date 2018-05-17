import React from 'react';

import BreadCrumb from "./BreadCrumb";
import GoodsPhoto from "./GoodsPhoto";
import GoodsDescription from "./GoodsDescription";


class ShopItemPreview extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return(
            <div className="item-preview">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <BreadCrumb match={this.props.match}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <GoodsPhoto item={this.props.item}/>
                        </div>
                        <div className="col-md-6">
                            <GoodsDescription item={this.props.item}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ShopItemPreview;