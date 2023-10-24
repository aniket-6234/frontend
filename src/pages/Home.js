import React from "react";
import FrokestImg from "../images/frokest.jpeg";

const Home = () => {
  return (
    <div className="main-content-container ">
      <h2 className="current-page-head">Explore</h2>
      <div className="scrollable-container">
        <div className="post-container">
          <div>
            <div className="flex justify-between items-center">
              <div className="new-user-item">
                <div className="new-user-profile-post">AR</div>
                <div className="new-user-name-post">
                  <p className="user-full-name-post">Aniket Raikwar</p>
                  <p className="user-name-text-post">@aniket_raikwar</p>
                </div>
              </div>
              <p className="date">12 October, 2023</p>
            </div>
            <div className="flex justify-between mt-3">
              <div className="content-box ">
                <h3 className="content-head">
                  Code Reviews: A Zoomed Out Approach
                </h3>
                <p className="mt-1">
                  Introduction This article will touch upon scenarios that I
                  have encountered while working at Hashnode where some code
                  reviews helped us prevent future rework on the same issue b...
                </p>
              </div>
              <div className="content-img-div">
                <img className="content-img" src={FrokestImg} alt="" />
              </div>
            </div>
            <div className="flex items-center mt-3">
              <div className="people-div">
                <div className="w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M5 20H19V22H5V20ZM12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 14.4183 16.4183 18 12 18Z"
                      fill="rgba(18,39,228,1)"
                    ></path>
                  </svg>
                </div>
              </div>
              <p className="people-name">
                Shashank, Kaushal and 3 others like this post.
              </p>
            </div>
          </div>
          <div className="shortcut-container">
            <div className="flex items-center">
              <div className="flex items-center cursor-pointer">
                <div className="shortcut-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path>
                  </svg>
                </div>
                <p className="shortcut-text">128 Likes</p>
              </div>
              <div className="flex items-center ml-8 cursor-pointer">
                <div className="shortcut-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22H2L4.92893 19.0711C3.11929 17.2614 2 14.7614 2 12ZM6.82843 20H12C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 14.1524 4.85124 16.1649 6.34315 17.6569L7.75736 19.0711L6.82843 20ZM8 13H16C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13Z"></path>
                  </svg>
                </div>
                <p className="shortcut-text">42 Comments</p>
              </div>
            </div>
            <div className="tags-div">
                
              <div className="flex items-center">
                <div className="tag">React</div>
                <div className="tag">Node JS</div>
                <div className="tag">Java</div>
              </div>
              <div className="bookmark-line"></div>
              <div className="shortcut-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M5 2H19C19.5523 2 20 2.44772 20 3V22.1433C20 22.4194 19.7761 22.6434 19.5 22.6434C19.4061 22.6434 19.314 22.6168 19.2344 22.5669L12 18.0313L4.76559 22.5669C4.53163 22.7136 4.22306 22.6429 4.07637 22.4089C4.02647 22.3293 4 22.2373 4 22.1433V3C4 2.44772 4.44772 2 5 2ZM18 4H6V19.4324L12 15.6707L18 19.4324V4Z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
