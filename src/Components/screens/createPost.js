import React, { useState } from "react";

import "../../ComponentsCss/createPost.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");

  const postDetails = () => {
    const data = new FormData();
    form.append("file", image);
    form.append("upload_preset", "instagram-clone");
    form.append("cloud_name", "dhruv2612354");
    fetch("https://api.cloudinary.com/v1_1/dhruv2612354");
  };

  return (
    <div className="card input-filed">
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="file-field input-field">
        <div className="btn">
          <span>Upload File</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
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

export default CreatePost;
