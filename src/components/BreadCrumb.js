import React from 'react';
import {Link} from 'react-router-dom';

class BreadCrumb extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {

        let pathNames = this.props.match ? this.props.match.url.split('/').splice(1) : [''];

        let path = '';

        let breadCrumbItems = pathNames.map((item) => {

            path = path + '/' + item;

            return (

                <li className="bread-crumb__item" key={item}>
                    <Link to={path} className="bread-crumb__link">{item}</Link>
                </li>
            )}

        );

        return (
            <section className="bread-crumb">
                <h2 className="bread-crumb__header">{pathNames[0]}</h2>
                <ul className="bread-crumb__list">
                  <li className="bread-crumb__item">
                      <Link to="/" className="bread-crumb__link">home</Link>
                  </li>
                    {breadCrumbItems}
                </ul>
            </section>
        );
    }
}

export default BreadCrumb;

