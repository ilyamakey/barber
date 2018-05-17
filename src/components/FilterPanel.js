import React from 'react';

class FilterPanel extends React.Component {
    constructor(props) {
        super(props);

        this.active = this.active.bind(this)
    }

    active(e, className) {
        if (e.target.type !== 'checkbox') return;

        e.target.classList.toggle(className);

        this.props.action(e.target);
    }

    render() {
        return (
            <div className="filter">
                <h3 className="filter__header">manufacturers</h3>
                <ul className="filter__list" onChange={(e)=>this.active(e, 'filter__link--active')}>
                    <li className="filter__item">
                        <label className="filter__label"><input type="checkbox" value="baxter" className="filter__link"/>baxter of california</label>
                    </li>
                    <li className="filter__item">
                        <label className="filter__label"><input type="checkbox" value="naty" className="filter__link"/>mr naty</label>
                    </li>
                    <li className="filter__item">
                        <label className="filter__label"><input type="checkbox" value="murray" className="filter__link"/>murray's</label>
                    </li>
                    <li className="filter__item">
                        <label className="filter__label"><input type="checkbox" value="crew" className="filter__link"/>american crew</label>
                    </li>
                </ul>
            </div>
        )
    }
}

export default FilterPanel;