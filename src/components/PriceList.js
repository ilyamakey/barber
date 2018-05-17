import React from 'react';
import BreadCrumb from "./BreadCrumb";

class PriceList extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <article className="price-list">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <BreadCrumb match={this.props.match}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="price-list__header">
                                <h1>true men's haircut</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h3>we use the best products</h3>
                            <ul className="price-list__advert">
                                <li className="price-list__item">baxter of california</li>
                                <li className="price-list__item">mr natty</li>
                                <li className="price-list__item">suavecito</li>
                                <li className="price-list__item">malin+goetz</li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h3 className="price-list__table__heading">our expert's prices</h3>
                            <table className="price-list__table">
                                <tbody>
                                <tr>
                                    <td>haircut</td>
                                    <td>$100</td>
                                </tr>
                                <tr>
                                    <td>beard styling</td>
                                    <td>$50</td>
                                </tr>
                                <tr>
                                    <td>mustache styling</td>
                                    <td>$30</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="price-list__article">
                                <h3>several words about us:</h3>
                                <p className="price-list__column">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolore et, expedita incidunt ipsa magni possimus totam vitae? Commodi culpa eaque fugiat impedit ipsa ipsum natus nemo nostrum numquam placeat provident, repellendus sequi? Distinctio ipsam modi nobis officia quas, qui quod repellat rerum sed tempore! At ex, hic magni maiores repellendus tenetur voluptatum. Architecto aspernatur assumenda, consequatur culpa, et expedita facilis fuga modi nam neque nulla quasi quo recusandae sequi sunt, temporibus voluptate! Aliquam eligendi eos neque omnis provident tempore.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        );
    }
}

export default PriceList;