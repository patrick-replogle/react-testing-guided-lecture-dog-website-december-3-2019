import "./App.css";
import React from "react";
import { useLocalStorage } from "./utils/input";
import { useDogImages } from "./utils/api";

function App(props) {
  // we're calling our custom hooks here, and passing the parameters we defined in input.js
  const [breed, setBreed] = useLocalStorage("breed", "husky");
  const [count, setCount] = useLocalStorage("count", 1);
  const [images, setImages] = useDogImages(breed, count);

  return (
    <>
      <h1>The Dog Website</h1>

      <select value={breed} onChange={e => setBreed(e.target.value)}>
        <option value="husky">Husky</option>
        <option value="beagle">Beagle</option>
        <option value="corgi">Corgi</option>
        <option value="boxer">Boxer</option>
      </select>

      <input
        type="number"
        placeholder="Count"
        value={count}
        onChange={e => setCount(e.target.value)}
      />
      <button onClick={() => setImages([])}>Clear Images</button>

      <div>
        {images.map((image, index) => (
          <img key={index} src={image} alt="Dog" />
        ))}
      </div>
    </>
  );
}

export default App;
