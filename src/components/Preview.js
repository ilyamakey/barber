import React from 'react';
import PreviewItem from "./PreviewItem";
import PreviewNews from "./PreviewNews";

class Preview extends React.Component {

  render() {
    const {first, second} = this.props;

    return (
        <div className="preview">
            <PreviewItem heading={first.heading} content={first.content}/>
            <div className="preview__divider"></div>
            <PreviewItem heading={second.heading}  content={second.content}/>
        </div>
    );
  }
}

export default Preview;
