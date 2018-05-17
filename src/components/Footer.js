import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
        <section className="footer__info container">
            <div className="row">
                <div className="col-12 col-sm-4">
                    <article className="footer__info__address footer--vertical-margin">
                        <h4 className="footer__info__heading">Borodinskyy Barbershop</h4>
                        <p className="footer__info__paragraph">Address: Kyiv, 99 Olega Vinnika street</p>
                        <p className="footer__info__paragraph">phone: +38(044)550-05-55</p>
                    </article>
                </div>
                <div className="col-12 col-sm-4">
                    <section className="footer__info__social footer--vertical-margin">
                        <h4 className="footer__info__heading">Social media</h4>
                        <div className="footer____info__social-group">
                            <a href="#" className="footer__info__social-item footer__info__social-item--vk"></a>
                            <a href="#" className="footer__info__social-item footer__info__social-item--fb"></a>
                            <a href="#" className="footer__info__social-item footer__info__social-item--ig"></a>
                        </div>
                    </section>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="footer__info__production__wrapper">
                        <section className="footer__info__production footer--vertical-margin">
                            <h4 className="footer__info__production__heading">Production</h4>
                            <div className="footer__info__production__made-by">Ilya Makey</div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Footer;
