import React from 'react';

class Teaser extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="teaser">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="teaser__logo"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <section className="teaser__advert">
                <h2 className="teaser__heading">stylish</h2>
                <p>we do our work really fast! two hours will fly as a second and you will get cool styling from our staff</p>
              </section>
            </div>
            <div className="col-sm-4">
              <section className="teaser__advert">
                <h2 className="teaser__heading">cool</h2>
                <p>Ipsa dignissimos at quasi nobis praesentium, asperiores iste mollitia inventore.
                </p>
              </section>
            </div>
            <div className="col-sm-4">
              <section className="teaser__advert">
                <h2 className="teaser__heading">expensive</h2>
                <p>Ipsa dignissimos at gopo moe smaha kuli mendas in da. quasi nobis praesentium, asperiores iste mollitia inventore.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Teaser;
