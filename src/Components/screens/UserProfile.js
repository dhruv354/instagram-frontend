import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { UserContext } from "../../App";
import "../../ComponentsCss/Profile.css";

function Profile() {
  const [userProfile, setUserProfile] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  //   console.log(state);
  const { userid } = useParams();
  // console.log(userid);

  useEffect(() => {
    fetch(`/user/${userid}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        // setPicks(result.myPost);
        setUserProfile(result);
      });
  }, []);
  return (
    <>
      {() => {
        if (!userProfile) {
          return "loading....";
        }
      }}
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
              <h6>{userProfile.posts.length}</h6>
              <h6>40 followers</h6>
              <h6>40 following</h6>
            </div>
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
    </>
  );
}

export default Profile;
