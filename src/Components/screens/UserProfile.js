import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { UserContext } from "../../App";
import "../../ComponentsCss/Profile.css";
import '../../ComponentsCss/UserProfile.css'

function UserProfile() {
  const [userProfile, setUserProfile] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  // console.log('logging the redux state\n');
  // console.log(state);
  const { userid } = useParams();
  console.log(userid);

  /*************function to fetch profile of a particular user*************** */
  useEffect(() => {
    fetch(`/user/${userid}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('log from useEffect call\n');
        console.log(result);
        setUserProfile(result);
      });
  }, []);

  /*****************function to follow a user**************/

  const followUser = () => {
    fetch("/follow", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({
        followId: userid,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        dispatch({type: 'UPDATE',
         payload: {following: result.following,
            followers: result.followers
        }})
        localStorage.setItem("user", JSON.stringify(result))
        setUserProfile((prevState) => {
          return {
            ...prevState, 
            user: result
          }
        })
      })
      .catch((err) => console.log(err));
  };

  /********returning jsx***************** */
  return (
    <div>
      {userProfile.user ? (
        <div className="container">
          <div className="profile-container">
            <div className="img-container">
              <img
                className="profile-img"
                src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <div className="person-details">
              <h4>{userProfile.user.name}</h4>
              <h5>{userProfile.user.email}</h5>
              <div className="profile-details">
                <h6>{userProfile.posts.length} posts</h6>
                <h6>{userProfile.user.followers.length} followers</h6>
                <h6>{userProfile.user.following.length} following</h6>
              </div>
              <button
                className="Follow-button btn waves-effect waves-light "
                type="submit"
                name="action"
                onClick={() => followUser()}
              >
                Follow
              </button>
            </div>
          </div>
          <div className="gallery">
            {userProfile.posts.map((item) => {
              return (
                <img
                  key={item._id}
                  className="item"
                  src={item.photo}
                  alt="posts image"
                />
              );
            })}
          </div>
        </div>
      ) : (
        <h2>loading</h2>
      )}
    </div>
  );
}

export default UserProfile;
