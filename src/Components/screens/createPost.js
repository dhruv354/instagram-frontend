import React from "react";

import "../../ComponentsCss/createPost.css";

function createPost() {
  return (
    <div className="card input-filed">
      <input type="text" placeholder="title" />
      <input type="text" placeholder="body" />
      <div className="file-field input-field">
        <div className="btn">
          <span>Upload File</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        className="btn waves-effect waves-light blue"
        type="submit"
        name="action"
      >
        Submit post
      </button>
    </div>
  );
}

export default createPost;
