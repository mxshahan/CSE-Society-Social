import React from 'react';
import '../../Styles/Dashboard/editor.scss';

class Editor extends React.Component{
  render(){
    return (
      <div class="col-lg-12 nopadding">
        <textarea id="txtEditor" ></textarea>
      </div>
    )
  }
}

export default Editor;