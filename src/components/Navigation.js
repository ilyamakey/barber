import React from 'react';
import {Link} from 'react-router-dom';
import LoginForm from "./LoginForm";

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.displayForm = this.displayForm.bind(this);
    this.toggleNavigation = this.toggleNavigation.bind(this);

    this.state = {formIsActive: false};

  }

  displayForm(e) {

      if (e.target.dataset.role === 'form-close') {

          this.setState({formIsActive: false});
          this.toggleNavigation();

      } else if (e.target.dataset.role === 'form-toggle') {

          this.state.formIsActive ? this.setState({
              formIsActive: false
          }) : this.setState({
              formIsActive: true
          })
      }

  };

  toggleNavigation() {

      let element = document.querySelector('.nav__toggle');
      let navLink = document.getElementsByClassName('nav__link');

      if (element.style.transform === 'rotate(180deg)') {
          element.style.transform = 'rotate(0deg)';
      } else element.style.transform = 'rotate(180deg)';

     for (let i = 0; i < navLink.length; i++) {

         if(navLink[i].style.display === 'block') {
             navLink[i].style.display = 'none'
         } else navLink[i].style.display = 'block';
     }


  };

  render() {

      let homeComponent = null;

      window.location.pathname !== '/' ? homeComponent = <Link to="/" data-role="form-close" className="nav__logo"></Link> : null;

      let activeLink = 'nav__active';

      let isActive = function (pathMatch) {

          if (pathMatch === window.location.pathname) {
              return ' ' + activeLink;
          } else return '';
      };

      let loginForm = this.state.formIsActive ? <LoginForm/> : null;

    return (
      <nav className="nav" onClick={this.displayForm}>
        {homeComponent}
        <button className="nav__toggle" onClick={this.toggleNavigation} type="button"><span></span><span></span><span></span></button>
        <Link to="/news" data-role="form-close" className={'nav__link' + isActive('/news')}>News</Link>
        <Link to="/team" data-role="form-close" className={'nav__link' + isActive('/team')}>Our team</Link>
        <Link to="/price" data-role="form-close" className={'nav__link' + isActive('/price')}>Price-List</Link>
        <Link to="/shop" data-role="form-close" className={'nav__link' + isActive('/shop')}>Shop</Link>
        <Link to="/contacts" data-role="form-close" className={'nav__link' + isActive('/contacts')}>Find us</Link>
        <button className="nav__login" data-role="form-toggle" type="button">login</button>
          {loginForm}
      </nav>
    );
  }
}

export default Navigation;
