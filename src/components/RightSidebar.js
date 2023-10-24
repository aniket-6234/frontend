import React, { useState } from "react";
import FrokestImg from "../images/frokest.jpeg";

const newUserData = [
  { id: 4, name: "Aniket Raikwar", username: "aniket_raikwar" },
  { id: 5, name: "Smurti Sahoo", username: "s_sahoo_981" },
  { id: 6, name: "Sandi Shiva", username: "shiva_009" },
  { id: 1, name: "Ketan Dabre", username: "ketan_dabre2000" },
  { id: 2, name: "Sagar Wandile", username: "sagar_wandile01" },
  { id: 3, name: "Himanshu S", username: "himanshu_s001" },
];

const RightSidebar = () => {
  const [newUser, setNewUser] = useState(newUserData);

  const createUserFirstLastCombineText = (name) => {
    let newName = "";
    const nameArray = name.split(" ");
    newName =
      nameArray[0].charAt(0).toUpperCase() +
      nameArray[1].charAt(0).toUpperCase();

    return newName;
  };
  return (
    <div className="rightsidebar-container ">
      <div className="frokest-effect">
        <p id="creative-text">#1 Creative Developer</p>
      </div>
      <div className="follower-div">
        <div className="flex item-center">
          <p className="new-foll-text">WordCraft New User</p>
          <div className="mt-1 ml-2" style={{ width: "16px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M10.6144 17.7956 11.492 15.7854C12.2731 13.9966 13.6789 12.5726 15.4325 11.7942L17.8482 10.7219C18.6162 10.381 18.6162 9.26368 17.8482 8.92277L15.5079 7.88394C13.7092 7.08552 12.2782 5.60881 11.5105 3.75894L10.6215 1.61673C10.2916.821765 9.19319.821767 8.8633 1.61673L7.97427 3.75892C7.20657 5.60881 5.77553 7.08552 3.97685 7.88394L1.63658 8.92277C.868537 9.26368.868536 10.381 1.63658 10.7219L4.0523 11.7942C5.80589 12.5726 7.21171 13.9966 7.99275 15.7854L8.8704 17.7956C9.20776 18.5682 10.277 18.5682 10.6144 17.7956ZM19.4014 22.6899 19.6482 22.1242C20.0882 21.1156 20.8807 20.3125 21.8695 19.8732L22.6299 19.5353C23.0412 19.3526 23.0412 18.7549 22.6299 18.5722L21.9121 18.2532C20.8978 17.8026 20.0911 16.9698 19.6586 15.9269L19.4052 15.3156C19.2285 14.8896 18.6395 14.8896 18.4628 15.3156L18.2094 15.9269C17.777 16.9698 16.9703 17.8026 15.956 18.2532L15.2381 18.5722C14.8269 18.7549 14.8269 19.3526 15.2381 19.5353L15.9985 19.8732C16.9874 20.3125 17.7798 21.1156 18.2198 22.1242L18.4667 22.6899C18.6473 23.104 19.2207 23.104 19.4014 22.6899Z"
                fill="rgba(51,70,234,1)"
              ></path>
            </svg>
          </div>
        </div>
        <div>
          {newUser.map((user) => (
            <div key={user.id} className="new-user-item">
              <div className="flex items-center">
                <div className="new-user-profile">
                  {createUserFirstLastCombineText(user.name)}
                </div>
                <div className="new-user-name">
                  <div className="flex">
                    <p className="user-full-name">{user.name}</p>
                    {/* <div className="w-3 ml-1 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M10.007 2.10377C8.60544 1.65006 7.08181 2.28116 6.41156 3.59306L5.60578 5.17023C5.51004 5.35763 5.35763 5.51004 5.17023 5.60578L3.59306 6.41156C2.28116 7.08181 1.65006 8.60544 2.10377 10.007L2.64923 11.692C2.71404 11.8922 2.71404 12.1078 2.64923 12.308L2.10377 13.993C1.65006 15.3946 2.28116 16.9182 3.59306 17.5885L5.17023 18.3942C5.35763 18.49 5.51004 18.6424 5.60578 18.8298L6.41156 20.407C7.08181 21.7189 8.60544 22.35 10.007 21.8963L11.692 21.3508C11.8922 21.286 12.1078 21.286 12.308 21.3508L13.993 21.8963C15.3946 22.35 16.9182 21.7189 17.5885 20.407L18.3942 18.8298C18.49 18.6424 18.6424 18.49 18.8298 18.3942L20.407 17.5885C21.7189 16.9182 22.35 15.3946 21.8963 13.993L21.3508 12.308C21.286 12.1078 21.286 11.8922 21.3508 11.692L21.8963 10.007C22.35 8.60544 21.7189 7.08181 20.407 6.41156L18.8298 5.60578C18.6424 5.51004 18.49 5.35763 18.3942 5.17023L17.5885 3.59306C16.9182 2.28116 15.3946 1.65006 13.993 2.10377L12.308 2.64923C12.1078 2.71403 11.8922 2.71404 11.692 2.64923L10.007 2.10377ZM6.75977 11.7573L8.17399 10.343L11.0024 13.1715L16.6593 7.51465L18.0735 8.92886L11.0024 15.9999L6.75977 11.7573Z"
                          fill="rgba(57,79,240,1)"
                        ></path>
                      </svg>
                    </div> */}
                  </div>
                  <p className="user-name-text">@{user.username}</p>
                </div>
              </div>
              <div className="btn-follow">Follow</div>
            </div>
          ))}
        </div>
      </div>
      <div className="quote-div">
        <div className="flex item-center">
          <p className="new-foll-text">Quote of the Day</p>
          <div className="mt-1 ml-2" style={{ width: "16px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M21 3C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.455L2 22.5V4C2 3.44772 2.44772 3 3 3H21ZM10.5153 7.4116C8.72825 8.18684 7.5 9.75543 7.5 11.5052C7.5 12.5 7.77658 13.1137 8.29171 13.6605C8.61598 14.0048 9.12905 14.25 9.66558 14.25C10.6321 14.25 11.4156 13.4665 11.4156 12.5C11.4156 11.5795 10.7045 10.8389 9.80236 10.7553C9.64107 10.7403 9.47827 10.7431 9.32317 10.7645L9.32344 10.6729C9.32873 10.2322 9.4223 8.9333 10.9616 8.1004L10.5153 7.4116ZM15.5153 7.4116C13.7283 8.18684 12.5 9.75543 12.5 11.5052C12.5 12.5 12.7766 13.1137 13.2917 13.6605C13.616 14.0048 14.1291 14.25 14.6656 14.25C15.6321 14.25 16.4156 13.4665 16.4156 12.5C16.4156 11.5795 15.7045 10.8389 14.8024 10.7553C14.6411 10.7403 14.4783 10.7431 14.3232 10.7645L14.3234 10.6729C14.3287 10.2322 14.4223 8.9333 15.9616 8.1004L15.5153 7.4116Z"
                fill="rgba(63,80,231,1)"
              ></path>
            </svg>
          </div>
        </div>
        <div className="quote-content">
          <h3 className="quote-text">
            "Success is not final, failure is not fatal: It is the courage to
            continue that counts."
          </h3>
          <h3 className="quote-writer">- Winston Churchill</h3>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
