import React from "react";
import UserProfile from "../Components/UserProfile";
// import style

const userprofile = (props) => {
  return (
    <div>
      <UserProfile userdata={props.userData} />
      {console.log(props.userData)}
    </div>
  );
};

export default userprofile;
