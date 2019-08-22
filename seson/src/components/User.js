import React from 'react';

const User = props => {
  console.log("user");

  return (

    <div>
    <div>
    <div>{props.id}</div>
    <div>{props.first_name}</div> 

      
    </div>
     
    </div>
  );
};

export default User;