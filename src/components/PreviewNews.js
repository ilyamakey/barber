import React from 'react';
import {Link} from 'react-router-dom';

class PreviewNews extends React.Component {
    constructor() {
        super();


    }

  trimString(str, symbols) {
        let newStr = str.substr(0, symbols);
        return newStr + '...';
  }

  render() {

      const newsList = this.props.data.map((item, pos) => {
          if (pos < 2) return (
              <div className="preview__news" key={item.article}>
                  <p>{this.trimString(item.text, 150)}</p>
                  <time className="preview__news__time-stamp">{item.date}</time>
                  <Link className="preview__news__link" to={"/news/" + item.article}>(see all news)</Link>
              </div>
            )
          }
      );

      return (
              newsList
      )
  }
}

export default PreviewNews;
