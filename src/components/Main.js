import React from 'react';
import Teaser from "./Teaser";
import Preview from "./Preview";
import PreviewNews from "./PreviewNews";
import PreviewGallery from "./PreviewGallery";
import PreviewApply from "./PreviewApply";
import PreviewContacts from "./PreviewContacts";
import {Link} from 'react-router-dom';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.xhr = new XMLHttpRequest();
        this.state = {data: []};

    }

    componentWillMount() {
        this.xhr.open('GET', '/build/news.json', true);
        this.xhr.send();
        this.xhr.onload = () => {
            setTimeout(() => {
                this.setState({data: JSON.parse(this.xhr.responseText)})
            }, 100);

        };
    }

    render() {

        console.log(this.state.data);

        return (
            <main className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Teaser/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-lg-11">
                            <Preview first={{heading: 'News', content: <PreviewNews data={this.state.data}/>}}
                                     second={{heading: 'Gallery', content: <PreviewGallery/>}} />
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-12 col-lg-11">
                            <Preview first={{heading: 'Our Contacts', content: [<PreviewContacts key="PreviewContacts"/>, <Link to="/contacts" className="button" key="PreviewContactsLink">find us</Link>]}}
                                     second={{heading: 'Register', content: <PreviewApply/>}}/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Main;