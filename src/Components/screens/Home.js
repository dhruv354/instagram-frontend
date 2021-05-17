import React, { useContext, useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import M from "materialize-css";

import { UserContext } from "../../App";
import "../../ComponentsCss/Home.css";
function Home() {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);
  const [data, setData] = useState([]);

  /*****************************liking freind post ********************************** */
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

  /****************************************unliking a post**************************************** */
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

  /*******************************************commenting on post ******************************* */

  const postComment = (text, postId) => {
    fetch("/comment", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        text,
        postId,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
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

  /*******************************************deleting post**********************/

  const removePost = (postId) => {
    fetch(`/delete/${postId}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newData = data.filter((post) => {
          return post._id !== result._id;
        });
        setData(newData);
      })
      .catch((err) => console.log(err));
  };

  /******************************************fetching all posts from database ************************** */
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

  /******************************************************returning jsx*********************************************** */
  return (
    <div className="home">
      {data.map((post) => {
        return (
          <div className="card home-card" key={post._id}>
            <h5 className="name-heading">
              {/* {console.log("inside home route and making request from here")} */}
              <Link to={`/Profile/${post.postedBy._id}`}>
                {post.postedBy.name}
                {console.log(post.postedBy.name)}
              </Link>
              {/* {post.postedBy.name} */}
            </h5>
            {post.postedBy._id == state._id && (
              <i
                className="material-icons delete-icon"
                onClick={() => removePost(post._id)}
              >
                delete
              </i>
            )}

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

              <h6>{post.likes.length} likes</h6>
              <h6>{post.title}</h6>
              <p>{post.body}</p>

              {post.comments.map((comment) => {
                return (
                  <h6 key={comment._id} className="comment-container">
                    <span className="comment-author">
                      {comment.postedBy.name}
                    </span>{" "}
                    <span className="comment=text"> {comment.text}</span>
                  </h6>
                );
              })}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  postComment(e.target[0].value, post._id);
                  e.target[0].value = "";
                  // console.log(e.target[0].value);
                }}
              >
                <input type="text" placeholder="add a comment" />
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
