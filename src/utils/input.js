import { useState } from "react";

export function useInput(initialValue) {
  // initialValue can be a primitive type, OR a callback function
  // if it's a callback function, whatever gets returned from it is the initial value
  const [value, setValue] = useState(initialValue);

  // we're wrapping setValue with a custom function, so we can add functionality
  // (like logging the new value)
  const customSetter = newValue => {
    console.log("New value:", newValue);
    setValue(newValue);
  };

  // returns the state value, and our custom setter function (isntead of setValue)
  return [value, customSetter];
}

// this custom hook will store any changes in our input fields to local storage,
// so the values persist when we refresh or close our browser
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useInput(() => {
    // check to see if our input field has a corresponding value in local storage,
    // otherwise return the initial value passed as a parameter above
    return window.localStorage.getItem(key) || initialValue;

    // return initialValue // <-- this would be the same as saying useInput(initialValue)
  });

  // again, wrap the original setter function with a custom function,
  // so we can do cool things
  const customSetter = newValue => {
    setValue(newValue);
    // persists the value of our input to local storage, after setting it to state
    window.localStorage.setItem(key, newValue);
  };

  return [value, customSetter];
}
