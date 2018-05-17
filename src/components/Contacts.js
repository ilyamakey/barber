import React from 'react';
import BreadCrumb from "./BreadCrumb";
import PreviewContacts from "./PreviewContacts";

class Contacts extends React.Component {
    constructor() {
        super();
    }

    render() {

        return (
            <div className="contacts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <BreadCrumb match={this.props.match}/>
                        </div>
                    </div>
                    <div className="row contacts__address">
                        <div className="col-md-5">
                            <section className="contacts">
                                <div className="contacts__heading">
                                    <h1>how to find us</h1>
                                </div>
                                <p>please use our map to find a way to our barbershop:</p>
                                <PreviewContacts/>
                            </section>
                        </div>
                        <div className="col-md-6 offset-md-1">
                            <img src="/build/pics/map-md.png" className="contacts__map"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts;