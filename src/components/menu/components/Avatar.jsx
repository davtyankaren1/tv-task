import React from "react";

const Avatar = ({ user }) => {
  return (
    <div className='avatar-div'>
      <img src={user} />
      <span>Daniel</span>
    </div>
  );
};

export default Avatar;
