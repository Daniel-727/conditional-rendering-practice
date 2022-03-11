import React from "react";
import Form from "./Form";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Form registered={userIsRegistered} />{" "}
      {/*passing userIsRegistered as a prop so child components can use it to determine whether to show or not show a component*/}
    </div>
  );
}

export default App;
