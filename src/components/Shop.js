import React from 'react';
import {Switch, Route} from 'react-router-dom';
import FilterPanel from "./FilterPanel";
import BreadCrumb from "./BreadCrumb";
import ShopItemsGrid from "./ShopItemsGrid";
import ShopItemPreview from "./ShopItemPreview";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.data = '';
    this.filters = [];

    this.state = {
        data: [],
        previewItem: {}
    };

    this.filterGoodsList = this.filterGoodsList.bind(this);

  };

  loadData(source, callback) {

      if (this.data) return this.data;

      let xhr = new XMLHttpRequest();
      xhr.open('GET', source, true);
      xhr.send();

      xhr.onload = () => {
          this.data = JSON.parse(xhr.responseText);
          callback();
      }
  };

  componentDidMount() {

      this.loadData('/build/db.json', () => {
          this.setState({data: this.data})
      });

  };

  filterGoodsList(param) {


      if (param.checked) {

          this.filters.push(param.value);

      } else {

          this.filters = this.filters.filter((value) => param.value !== value);

      }

      if (this.filters.length) {

          this.setState({

              data: this.data.filter(

                  (item) => {

                      return this.filters.some((filter) => {

                          return filter === item.brand;

                      });

                  })

          });

      } else {

          this.setState({

              data: this.data

          })
      }

  };


  render() {

    return (
        <div className="shop">
            <Switch>
                <Route path={this.props.match.url + '/:itemId'} render={() => {
                    let arr = this.props.location.pathname.split('/');
                    let key = arr[arr.length - 1];
                    let item = this.state.data.filter((item) => item.id === key);
                    return <ShopItemPreview item={item[0]} match={this.props.match}/>
                }
                }/>
                <Route exact path={this.props.match.url} render={() => (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <BreadCrumb match={this.props.match}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <FilterPanel action={this.filterGoodsList}/>
                            </div>
                            <div className="col-md-9">
                                <ShopItemsGrid goods={this.state.data}/>
                            </div>
                        </div>
                    </div>
                )}/>
            </Switch>
        </div>
    );
  }
}

export default Shop;
