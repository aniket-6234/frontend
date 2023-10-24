import React from "react";

const Follower = () => {
  return (
    <div className="main-content-container ">
      <h2 className="current-page-head">User's</h2>
      <div className="scrollable-container">
        <div className="user-container">
          <div className="d-flex">
            <div className="new-user-item">
              <div className="new-user-profile-post">AR</div>
              <div className="new-user-name-post">
                <p className="user-full-name-post">Aniket Raikwar</p>
                <p className="user-name-text-post">@aniket_raikwar</p>
              </div>
            </div>
          </div>
          <div>follow</div>
        </div>
      </div>
    </div>
  );
};

export default Follower;
