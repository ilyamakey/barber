import React from 'react';

class PreviewApply extends React.Component {
  constructor() {
      super();

      this.submit = this.submit.bind(this);
      this.state = {submit: false}
  }

  submit(e) {

      this.setState({submit: true});

      e.preventDefault();
  }

  render() {

    if (this.state.submit) return <h3>Thank you, we will call you ASAP!</h3>;
    else
    return (
      <div className="preview__apply">
          <p>Please indicate date and time and we will call you to arrange details:</p>
          <form action="/" method="post">
              <div className="preview__input-row">
                  <input className="preview__apply__input" defaultValue="2018-01-01" type="date" required/>
                  <input className="preview__apply__input" defaultValue="00:00" type="time"/>
              </div>
              <div className="preview__input-row">
                  <input className="preview__apply__input" type="text" required placeholder="Your name"/>
                  <input className="preview__apply__input" type="tel" required placeholder="Your phone number"/>
              </div>
              <input type="submit" className="button preview__apply__submit" onClick={this.submit}/>
          </form>
      </div>
    )
  }
}

export default PreviewApply;
