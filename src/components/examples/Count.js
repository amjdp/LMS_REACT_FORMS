import React, { useState } from 'react';

function Example() {
    // Declare a state variable called "count" and initialize it to 0
    const [count, setCount] = useState(0);

    // Define a function to handle the "click" event on the button
    function handleClick() {
        // Update the "count" state variable by incrementing it
        setCount(count + 1);
    }

    // Render a button that displays the current value of "count"
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Example;



// In this example, we're using useState to define a state variable called count, 
// which is initially set to 0. We're also defining a function called handleClick 
// that updates the count state variable by incrementing it.

// Finally, we're rendering a button that displays the current value of count, and 
// that calls the handleClick function when clicked. When the button is clicked, the 
// handleClick function updates the state by calling setCount, which triggers a 
// re-render of the component with the updated state value.