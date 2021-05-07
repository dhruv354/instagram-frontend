import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import M from "materialize-css";

import { UserContext } from "../../App";
import "../../ComponentsCss/Home.css";
function Home() {
  //logic for avoiding home display without being signed in
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  // if (!state) {
  //   M.toast({
  //     html: "please signin",
  //     classes: "#e57373 red lighten-2",
  //   });
  //   history.push("/signin");
  // } else {
  //   history.push("/");
  // }

  //logic to  fetch all posts from database
  const [data, setData] = useState([]);

  const likePost = (id) => {
    fetch("/like", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        const newData = data.map((post) => {
          if (post._id == result._id) {
            return result;
          } else {
            return post;
          }
        });
        setData(newData);
      })
      .catch((err) => console.log(err));
  };

  const unLikePost = (id) => {
    fetch("/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        postId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        const newData = data.map((post) => {
          if (post._id == result._id) {
            return result;
          } else {
            return post;
          }
        });
        setData(newData);
      });
  };

  useEffect(() => {
    fetch("http://localhost:8000/allposts", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setData(result);
        // setData(result.posts);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="home">
      {data.map((post) => {
        return (
          <div className="card home-card" key={post._id}>
            <h5>{post.postedBy.name}</h5>
            <div className="card-image">
              <img src={post.photo} />
            </div>
            <div className="card-content">
              <i className="material-icons" style={{ color: "red" }}>
                favorite
              </i>

              {post.likes.includes(state._id) ? (
                <i
                  className="material-icons"
                  onClick={() => unLikePost(post._id)}
                >
                  thumb_down
                </i>
              ) : (
                <i
                  className="material-icons"
                  onClick={() => likePost(post._id)}
                >
                  thumb_up
                </i>
              )}

              {/* <i className="material-icons" onClick={() => likePost(post._id)}>
                thumb_up
              </i>

              <i
                className="material-icons"
                onClick={() => unLikePost(post._id)}
              >
                thumb_down
              </i> */}

              <h6>{post.likes.length} likes</h6>
              <h6>{post.title}</h6>
              <p>{post.body}</p>
              <input type="text" placeholder="add a comment" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
