import React from 'react';
import {Route} from 'react-router-dom';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import PriceList from "./components/PriceList";
import Shop from "./components/Shop";
import OurTeam from "./components/OurTeam";
import News from "./components/News";
import Contacts from "./components/Contacts";


class App extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
        <div>
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <Navigation />
                </div>
              </div>
            </div>
          </header>
          <Route exact path="/" component={Main}/>
          <Route path="/news" component={News}/>
          <Route path="/price" component={PriceList}/>
          <Route path="/shop" component={Shop}/>
          <Route path="/team" component={OurTeam}/>
          <Route path="/contacts" component={Contacts}/>
          <footer className="footer">
              <Footer/>
          </footer>
        </div>
    );
  }
}

export default App;