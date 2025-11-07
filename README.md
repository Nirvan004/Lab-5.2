Include your answers to the following questions in your submission, within the README.md file:

How did event.preventDefault() help in handling form submission?
What is the difference between using HTML5 validation attributes and JavaScript-based validation? Why might you use both?
Explain how you used localStorage to persist and retrieve the username. What are the limitations of localStorage for storing sensitive data?
Describe a challenge you faced in implementing the real-time validation and how you solved it.
How did you ensure that custom error messages were user-friendly and displayed at the appropriate times?

1. event.preventDefault() helped by stopping the default function like reloading the page and instead doing what I coded it to do which in this case saved to local storage, displayed a message and reset the form.
2. The validation attributes provide easy to use validation rules that are automatically enforced without a lot of extra JS which makes it easier and faster to program/code with. Javascript validation gives more flexiblity and can help with things like confirming the 2 passwords matched
3. Local storage was used by storing the username in local storage and if a username is found it would give the option to show the username and autofill that username. Local storage is not good for sensitive information as its stored in the browser as plain text and can be easily extorted through javascript.
4. the real time validation that I used was on the confirm password so that the confirm password would auto update if the password was changed so if the password and change password field were both filled out and the password was changed the confirm password field would automatically say they are not the same instead of waiting got the submit button to be clicked first.
5. I wrote extra functions that manage the error messages so that they didnt need to be put into the logic of the other fucntions this way I could just call the error instead of writing the error in to every function after.
