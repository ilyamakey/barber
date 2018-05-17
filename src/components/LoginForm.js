import React from 'react';

function LoginForm() {

    function active(e, className) {
        if (e.target.dataset.role !== 'login-form-toggle') return;

        let target = document.querySelector('[data-role=login-form-activate]');
        target.classList.toggle(className);
    }


    return(
        <section className="login-form">
            <h2 className="login-form__heading">Personal cabinet</h2>
            <p className="login-form__p">please enter your login and password</p>
            <input type="text" placeholder="Login" className="login-form__input login-form__input--login"/>
            <input type="text" placeholder="Password" className="login-form__input login-form__input--pass"/>
            <div className="login-form__sign-in" onChange={(e)=>active(e, 'login-form__label--active')}>
                <label className="login-form__label" data-role="login-form-activate"><input type="checkbox" data-role="login-form-toggle" className="login-form__checkbox"/><span className="login-form__remember">remember me</span></label>
                <a href="#" className="login-form__forget">I forgot the password!</a>
            </div>
            <button className="button login-form__button">login</button>
            <button className="login-form__close" data-role="form-close"></button>
        </section>
    )
}

export default LoginForm;