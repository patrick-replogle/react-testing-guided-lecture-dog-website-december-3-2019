import axios from "axios";
import { useState, useEffect } from "react";

export function useDogImages(breed, count) {
  const [images, setImages] = useState([]);

  // we can define side effects in our custom hooks as well,
  // and subscribe to changes in variables coming from anywhere (like parameters...)
  useEffect(() => {
    setImages([]);

    // make a new api call any time `breed` or `count` changes
    axios
      .get(`https://dog.ceo/api/breed/${breed}/images/random/${count}`)
      .then(result => {
        setImages(result.data.message);
      })
      .catch(error => {
        console.log("error:", error);
      });
  }, [breed, count]);

  // we don't use `setImages` in App.js, but it's nice to return it just in case
  return [images, setImages];
}
