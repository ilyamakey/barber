import React from 'react';
import Breadcrumb from './BreadCrumb';

class News extends React.Component{
    constructor() {
        super();

        this.xhr = new XMLHttpRequest();
        this.state = {data:[]};

    }

    componentDidMount() {
        this.xhr.open('GET', '/build/news.json', true);
        this.xhr.send();
        this.xhr.onload = () => {
            this.setState({data: JSON.parse(this.xhr.responseText)}) ;
        }

    }

    render() {

        let news = this.state.data.map((item) =>
            <section className="news__record" key={item.article}>
                <h2 >{item.article}</h2>
                <p className="news__paragraph">{item.text}</p>
                <time className="news__time-stamp">{item.date}</time>
            </section>
        );

        return (
            <div className="news">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Breadcrumb match={this.props.match}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="news__header">
                                <h1>our news</h1>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-md-11">
                                    {news}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default News;
