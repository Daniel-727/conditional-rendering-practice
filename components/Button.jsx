import React from "react";

function Button(props) {
  return <button type='submit'>{props.text}</button>;
}

export default Button;

/*I actually didn't need this Button component, I could've just use a normal html button in the Form component and switched the condition-based text like this:

<button type='submit'>
    {props.registered ? 'Login' : 'Register'}
</button>

*/
