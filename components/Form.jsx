import React from "react";
import Button from "./Button";

function Form(props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {!props.registered && 
        <input type="password" placeholder="Confirm Password" /> //if the user is not registered then show the Confirm Password input
      }
      {props.registered ? <Button text="Login" /> : <Button text="Register" /> //if the user is registered then have them login, if not then have them register
      }
    </form>
  );
}

export default Form;
