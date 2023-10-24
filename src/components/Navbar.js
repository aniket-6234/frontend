import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <div style={{ width: "25px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              d="M16 16C17.6569 16 19 17.3431 19 19C19 20.6569 17.6569 22 16 22C14.3431 22 13 20.6569 13 19C13 17.3431 14.3431 16 16 16ZM6 12C8.20914 12 10 13.7909 10 16C10 18.2091 8.20914 20 6 20C3.79086 20 2 18.2091 2 16C2 13.7909 3.79086 12 6 12ZM14.5 2C17.5376 2 20 4.46243 20 7.5C20 10.5376 17.5376 13 14.5 13C11.4624 13 9 10.5376 9 7.5C9 4.46243 11.4624 2 14.5 2Z"
              fill="rgba(18,39,228,1)"
            ></path>
          </svg>
        </div>
        <h3 className="logo-name">WordCraft App</h3>
      </div>
      <div className="nav-container">
        <div className="nav-item-div">
          <div className="search-bar-container">
            <div className="search-icon flex-div">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
                  fill="rgba(117,117,117,1)"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              className="search-input"
              placeholder="Search blog, post, user..."
            />
          </div>
          <div style={{ height: "100%" }} className="flex-div">
            <div className="noti-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M20 17H22V19H2V17H4V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V17ZM9 21H15V23H9V21Z"
                  fill="rgba(18,39,228,1)"
                ></path>
              </svg>
            </div>
            <div className="btn-create-new-blog">Create new blog</div>
          </div>
        </div>
        <div className="user-profile-div">
          <div className="btn-profile">Go To Pofile</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
