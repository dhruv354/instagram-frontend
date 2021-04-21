import React from "react";

import "../../ComponentsCss/Profile.css";

function Profile() {
  return (
    <div>
      <div className="profile-container">
        <div className="img-container">
          <img
            className="profile-img"
            src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div className="person-details">
          <h4>Meenakshi Verma</h4>
          <div className="profile-details">
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
