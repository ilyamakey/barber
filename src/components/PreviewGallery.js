import React from 'react';

class PreviewGallery extends React.Component {

  constructor() {
      super();

      this.nextImg = this.nextImg.bind(this);
      this.prevImg = this.prevImg.bind(this);

      this.state = {position: 0};

  }

  nextImg() {


      if (this.state.position >= pics.length - 1) return;

      this.setState({state: this.state.position++});

  }

  prevImg() {


      if (this.state.position <= 0) return;

      this.setState({state: this.state.position--});

  }

  getImage(path) {

      return path + pics[this.state.position].uri;
  }



  render() {

    return (
      <div className="preview__gallery">
          <img src={this.getImage('/build/pics/')} className="preview__gallery__img" alt="our barbershop" width="300px" height="180px"/>
          <div className="preview__btn-group">
              <button className="button" onClick={this.prevImg}>back</button>
              <button className="button" onClick={this.nextImg}>forward</button>
          </div>
      </div>
    )
  }
};

let pics = [
    {
        "uri": "barber.jpg",
        "description": "our interior"
    },
    {
        "uri": "barber2.jpg",
        "description": "our interior"
    },
    {
        "uri": "barber3.jpg",
        "description": "our interior"
    }
];


export default PreviewGallery;
