import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";
import "../../ComponentsCss/createPost.css";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (url) {
      fetch("http://localhost:8000/createpost", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
        body: JSON.stringify({
          title,
          body,
          image: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.error) {
            M.toast({ html: data.error, classes: "#e57373 red lighten-2" });
          } else {
            M.toast({
              html: "created post successfully",
              classes: "#43a047 green darken-1 ",
            });
            history.push("/");
          }
        })
        .catch((err) => console.log(err));
    }
  }, [url]);

  const postDetails = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instagram-clone");
    data.append("cloud_name", "dhruv2612354");
    fetch("https://api.cloudinary.com/v1_1/dhruv2612354/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
        console.log(data);
      })
      .catch((err) => console.log(err));

    /**********************making a post request to server and posting data to database***********************/
  };

  /*************returning jsx************************ */
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
        onClick={() => postDetails()}
      >
        Submit post
      </button>
    </div>
  );
}

export default CreatePost;
